import { FiClipboard } from "react-icons/fi";
import { LoadingText, RefineTextBox } from "@components/TextBox";

const ResultTextBox = ({ isLoading = false, text = "" }) => {
    const handleClipboard = () => {
        navigator.clipboard
            .writeText(text)
            .then(() => alert("텍스트가 클립보드에 복사되었습니다."))
            .catch(err => console.error("클립보드 복사 실패:", err));
    };

    return (
        <>
            <h3 className='text-sm font-normal text-gray-darkest mr-10'>
                {isLoading ? <LoadingText /> : <RefineTextBox text={text} />}
            </h3>
            {!isLoading && <FiClipboard className='absolute right-2 bottom-2 opacity-50' onClick={handleClipboard} />}
        </>
    );
};

export default ResultTextBox;
