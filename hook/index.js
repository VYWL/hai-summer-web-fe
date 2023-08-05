import axios from "axios";

const ENDPOINT = "http://127.0.0.1:8081";

const getTextOCRresult = async file => {
    const ocr_url = ENDPOINT + "/ocr";

    let formData = new FormData();
    formData.append("image", file);

    const headers = {
        "Content-Type": "multipart/form-data",
    };

    try {
        const response = await axios.post(ocr_url, formData, { headers });
        if (response.status === 200) {
            return response.data;
        } else {
            console.log("Error : " + response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error : " + error);
    }
};

const getSummary = async inputText => {
    const gpt_endpoint = ENDPOINT + "/summary";

    const data = {
        text: inputText,
    };

    const headers = {
        "Content-Type": "application/json",
    };

    try {
        const response = await axios.post(gpt_endpoint, data, { headers });
        if (response.status === 200) {
            return response.data;
        } else {
            console.log("Error : " + response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error : " + error);
    }
};

export { getTextOCRresult, getSummary };
