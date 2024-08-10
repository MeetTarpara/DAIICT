import {uploadOnCloudinary} from "../utils/cloudinary.js"
import axios from 'axios'; // Use axios instead of request

const sendPutRequest = async () => {
    const BASE = "http://127.0.0.1:5000/";
    const maxRetries = 10;
    let attempt = 0;
    const image_url = "https://utfs.io/f/21f9a4ea-01d9-4bfe-82fd-a95c8e7384c2-1dbuq.jpg";

    // const avatarLocalPath = req.files?.avatar[0]?.path;
    // if (!avatarLocalPath) {
    //     throw new ApiError(400, "Avatar file is required")
    // }
    // const image_url = await uploadOnCloudinary(avatarLocalPath)

    while (attempt < maxRetries) {
        try {
            const response = await axios.post(BASE + "image/" + image_url)

            if (response.status === 200 || response.status === 201) {
                console.log("PUT Response:", response.data);
                return response.data;
            } else {
                console.error(`PUT Error: ${response.status}`);
                console.error(response.data);
                break;
            }
        } catch (error) {
            console.error(`Attempt ${attempt + 1} failed: ${error.message}`);
            if (attempt < maxRetries - 1) {
                console.log("Retrying...");
                await new Promise(resolve => setTimeout(resolve, 2000)); // wait before retrying
            } else {
                console.error("Max retries reached. Exiting.");
            }
        }
        attempt++;
    }
}

const sendRequest = async () => {
    const BASE = "http://127.0.0.1:5000/";
    const maxRetries = 10;
    let attempt = 0;
    const image_url = "https://utfs.io/f/21f9a4ea-01d9-4bfe-82fd-a95c8e7384c2-1dbuq.jpg";

    // const avatarLocalPath = req.files?.avatar[0]?.path;
    // if (!avatarLocalPath) {
    //     throw new ApiError(400, "Avatar file is required")
    // }
    // const image_url = await uploadOnCloudinary(avatarLocalPath)

    while (attempt < maxRetries) {
        try {
            const response = await axios.get(BASE + "image/" + image_url)

            if (response.status === 200 || response.status === 201) {
                console.log("PUT Response:", response.data);
                return response.data;
            } else {
                console.error(`PUT Error: ${response.status}`);
                console.error(response.data);
                break;
            }
        } catch (error) {
            console.error(`Attempt ${attempt + 1} failed: ${error.message}`);
            if (attempt < maxRetries - 1) {
                console.log("Retrying...");
                await new Promise(resolve => setTimeout(resolve, 2000)); // wait before retrying
            } else {
                console.error("Max retries reached. Exiting.");
            }
        }
        attempt++;
    }
}

export {sendPutRequest, sendRequest};