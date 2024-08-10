from flask import Flask, jsonify
from flask_cors import CORS
import cv2
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
from collections import deque

app = Flask(__name__)
CORS(app)

# Load the pre-trained model once at startup
model = load_model('./plant_disease_cnn_model.h5')

# Labels for the plant diseases
class_names = [
    'Pepper bell-Bacterial spot', 'Pepper bell-healthy', 'Potato-Early blight', 
    'Potato-Late blight', 'Potato-healthy', 'Tomato-Bacterial spot', 
    'Tomato-Early blight', 'Tomato-Late blight', 'Tomato-Leaf Mold', 
    'Tomato-Septoria leaf spot', 'Tomato-Spider mites Two spotted spider mite', 
    'Tomato-Target Spot', 'Tomato-Yellow Leaf Curl Virus', 
    'Tomato-mosaic virus', 'Tomato-healthy'
]

# Focus on Tomato diseases only
tomato_classes = [i for i, name in enumerate(class_names) if "Tomato" in name]

# Parameters
CONFIDENCE_THRESHOLD = 0.75  # Increase the confidence threshold
MOVING_AVERAGE_WINDOW = 7  # Increase window size for more stable predictions
LEAF_DETECTION_THRESHOLD = 0.5  # Threshold for color detection

# Store the last few predictions to create a moving average
recent_predictions = deque(maxlen=MOVING_AVERAGE_WINDOW)

def detect_greenery(frame):
    """Detect green areas in the frame to filter out frames without leaves."""
    hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    lower_green = np.array([35, 40, 20])
    upper_green = np.array([85, 255, 255])
    mask = cv2.inRange(hsv_frame, lower_green, upper_green)
    green_ratio = cv2.countNonZero(mask) / (frame.size / 3)
    return green_ratio > LEAF_DETECTION_THRESHOLD

def predict_disease(frame):
    img_size = (150, 150)  # Make sure this matches your model's input size
    img = cv2.resize(frame, img_size)  # Resize the image
    img = img / 255.0  # Normalize the image
    img_array = np.expand_dims(img, axis=0)  # Add batch dimension

    predictions = model.predict(img_array)  # Predict disease
    tomato_predictions = predictions[0][tomato_classes]  # Focus on Tomato classes
    confidence = np.max(tomato_predictions)  # Get the highest probability
    disease_index = np.argmax(tomato_predictions)  # Get the index of the highest probability
    disease = class_names[tomato_classes[disease_index]]  # Get the disease name

    return disease, confidence

def average_prediction(predictions):
    """Calculate the most frequent disease and average confidence."""
    avg_confidence = np.mean([pred[1] for pred in predictions])
    avg_disease = max(set([pred[0] for pred in predictions]), key=[pred[0] for pred in predictions].count)
    return avg_disease, avg_confidence

@app.route('/start-detection', methods=['POST'])
def start_detection():
    # Initialize the webcam
    cap = cv2.VideoCapture(0)
    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                return jsonify({'status': 'error', 'message': 'Failed to grab frame'}), 500

            if detect_greenery(frame):  # Only predict if greenery is detected
                # Predict the disease
                disease, confidence = predict_disease(frame)
                recent_predictions.append((disease, confidence))

                if len(recent_predictions) == MOVING_AVERAGE_WINDOW:
                    disease, confidence = average_prediction(recent_predictions)

                if confidence >= CONFIDENCE_THRESHOLD:
                    # Display the results on the frame if confidence is above the threshold
                    cv2.putText(frame, f'Disease: {disease}', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)
                    cv2.putText(frame, f'Confidence: {confidence:.2f}%', (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)
                else:
                    # Display "No disease detected" if confidence is below the threshold
                    cv2.putText(frame, 'No disease detected', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2, cv2.LINE_AA)
            else:
                # Display "No leaf detected" if no greenery is detected
                cv2.putText(frame, 'No leaf detected', (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2, cv2.LINE_AA)

            # Show the frame
            cv2.imshow('Plant Disease Detection', frame)

            # Break the loop if 'q' is pressed
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

    finally:
        # Release the webcam and close the window
        cap.release()
        cv2.destroyAllWindows()

if __name__ == '__main__':
    app.run(debug=True)
