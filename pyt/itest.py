# import requests
# import aiohttp
# import asyncio
# BASE = "http://127.0.0.1:5000/"
# # image_url = "https%3A%2F%2Futfs.io%2Ff%2F21f9a4ea-01d9-4bfe-82fd-a95c8e7384c2-1dbuq.jpg"
# image_url = "https://utfs.io/f/21f9a4ea-01d9-4bfe-82fd-a95c8e7384c2-1dbuq.jpg"
# # response = requests.post(BASE + "helloworld/"+image_url, "data")
# # print(response.json())

# # response = await requests.put(BASE + "image/" + image_url)
# # print(response.json())

# response = requests.get(BASE + "image/" + image_url)
# print(response.json())

import aiohttp
import asyncio

BASE = "http://127.0.0.1:5000/"
image_url = "https://curioustimes.in/wp-content/uploads/2024/03/Neem-Unique-Trees.jpg"
async def send_put_request():
    async with aiohttp.ClientSession() as session:
        async with session.put(BASE + "image/" + image_url, timeout=60) as response:
            if response.status == 200 or response.status == 201:
                data = await response.json()
                print("PUT Response:", data)
                return data
            else:
                print(f"PUT Error: {response.status}")
                text = await response.text()
                return text
                print(text)

asyncio.run(send_put_request())