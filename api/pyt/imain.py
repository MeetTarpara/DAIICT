from flask import Flask, jsonify
from flask_restful import Api, Resource
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage
import os
from dotenv import load_dotenv

load_dotenv()

if "GOOGLE_API_KEY" not in os.environ:
    print("No key found")

os.environ['GOOGLE_API_KEY'] = os.getenv("GOOGLE_API_KEY")
llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash")

app = Flask(__name__)
api = Api(app)

ans = {}

def llmimagerep(url):
    try:
        message = HumanMessage(
            content=[
                {
                    "type": "text",
                    "text": "Answer following questions related to the provided input in two words comma seperated : 1]Which type of plant/tree 2]Which soil type is suitable",
                },
                {
                    "type": "image_url",
                    "image_url": url
                },
            ]
        )
        result = llm.invoke([message])
        ans[url] = result.content  
        return ans[url]
    except Exception as e:
        print(f"\nLLM Error: {e}\n")
        ans[url] = "Error processing the image"

class Image(Resource):
    def put(self, url):
        llmimagerep(url)
        return {"message": ans[url]}, 201

api.add_resource(Image, "/image/<path:url>")

if __name__ == "__main__":
    app.run(debug=True)
