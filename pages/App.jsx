import { useState, useRef } from "react";
import { getTextOCRresult, getSummary } from "@hook";
import UploadBox from "@components/UploadBox";
import Header from "@components/Header";
import LoadingBox from "@components/LoadingBox";
import DefaultImageBox from "@components/DefaultImageBox";
import ResultTextBox from "@components/ResultTextBox";
import DefaultUploadBox from "@components/DefaultUploadBox";
import PreviewUploadBox from "@components/PrevireUploadBox";

const App = () => {
    const fileInputRef = useRef();

    // States
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const [result, setResult] = useState(null);
    const [context, setContext] = useState(null);
    const [summary, setSummary] = useState(null);
    const [mode, setMode] = useState(false);

    // File upload event handler
    const onFileUpload = event => {
        const file = event.target.files[0] ?? null;
        const blobURL = file ? URL.createObjectURL(file) : null;

        setImageFile(file);
        setImage(blobURL);
        setContext(null);
        setResult(null);
        setSummary(null);
        setMode(false);
    };

    const handleUploadButton = () => fileInputRef.current.click();

    // Request event handler
    const handleOCRRequest = async () => {
        if (!imageFile) return;

        if (!isLoading) setLoading(true);
        const ret = await getTextOCRresult(imageFile);

        setLoading(false);

        if (ret.success) {
            const responseText = ret.data;
            setContext(responseText);
            setResult(responseText);
        } else {
            setResult(null);
        }

        setSummary(null);
    };

    const handleSummary = async mode => {
        if (mode === true) {
            if (summary) {
                setResult(summary);

                return;
            }

            // 없는 경우 -> 요청을 보내야 한다.
            if (!isLoading) setLoading(true);
            const ret = await getSummary(context);

            setLoading(false);

            if (ret.success) {
                setSummary(ret.data);
                setResult(ret.data);
            } else {
                setSummary(null);
            }

            return;
        }

        setResult(context);
    };

    // Screen & Background style
    const bgStyle = "w-screen h-screen bg-[#101322] flex justify-center";
    const screenStyle = "w-[512px] h-auto bg-[#101322] overflow-y-auto scrollbar-hide";

    return (
        <div className={bgStyle}>
            <div className={screenStyle}>
                <input type='file' accept='image/*' onChange={onFileUpload} className='hidden' ref={fileInputRef} />

                <Header />
                <UploadBox isUploaded={image}>
                    {image ? (
                        <PreviewUploadBox
                            image={image}
                            sendRequest={handleOCRRequest}
                            changeImage={handleUploadButton}
                        />
                    ) : (
                        <DefaultUploadBox handleClick={handleUploadButton} />
                    )}
                </UploadBox>

                <LoadingBox>
                    {!isLoading && result === null ? (
                        <DefaultImageBox text='요청을 보내주세요!' />
                    ) : (
                        <ResultTextBox
                            isLoading={isLoading}
                            text={result}
                            handleClick={handleSummary}
                            mode={mode}
                            setMode={setMode}
                        />
                    )}
                </LoadingBox>
            </div>
        </div>
    );
};

export default App;
