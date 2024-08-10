from flask import  jsonify
import streamlit as st
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage
import os
from dotenv import load_dotenv

load_dotenv()

st.title("💬 Chatbot2")
st.caption("🚀 A Streamlit chatbot powered by OpenAI")

if "GOOGLE_API_KEY" not in os.environ:
    print("No key found")
    
os.environ['GOOGLE_API_KEY'] = os.getenv("GOOGLE_API_KEY")

filename = "zebra.jpg"

llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash")

message = HumanMessage(
    content=[
        {
            "type": "text",
            "text": "Write a 5 sentences bullet pomit wise on image",
        },
        {
            "type": "image_url",
            "image_url": "https://utfs.io/f/21f9a4ea-01d9-4bfe-82fd-a95c8e7384c2-1dbuq.jpg"
        },
    ]
)

result = llm.invoke([message])
print("1\n",result.json())
temp = result.json()

try:
    print(temp.content)
except Exception as e:
    print("print error 1")

print("2\n",result.content)

temp1 = result.content
try:
    print(temp1.json())
except Exception as e:
    print("print error 2")

st.write(result.content)