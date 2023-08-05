import axios from "axios";

const get_text_ocr_result = async file => {
    const ocr_url = "http://localhost:8081/ocr";

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

export { get_text_ocr_result };
