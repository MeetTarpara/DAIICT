import React from 'react'
import axios from 'axios';

function PlantDetect() {
    const startDetection = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/start-detection');
            console.log(response.data);  // Display response or handle it
        } catch (error) {
            console.error('Error starting detection:', error);
        }
    };

    return (
        <div className="text-blue-700">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75" onClick={startDetection}>Start Plant Disease Detection </button>
        </div>
    );
}

export default PlantDetect
