import { FiClipboard } from "react-icons/fi";
import { LoadingText, RefineTextBox } from "@components/TextBox";
import Toggle from "./Toggle";

const ResultTextBox = ({ isLoading = false, text = "", handleClick, mode, setMode }) => {
    const handleClipboard = () => {
        navigator.clipboard
            .writeText(text)
            .then(() => alert("텍스트가 클립보드에 복사되었습니다."))
            .catch(err => console.error("클립보드 복사 실패:", err));
    };

    return (
        <>
            <h3 className='text-sm font-normal text-gray-darkest'>
                {isLoading ? <LoadingText /> : <RefineTextBox text={text} />}
            </h3>
            {!isLoading && (
                <div className='absolute right-2 bottom-1 flex flex-row'>
                    <span className='inline-block m-auto text-xs opacity-50 hover:opacity-100 transition-opacity duration-300 '>
                        {mode ? "Summarized!" : "Summarize it!"}
                    </span>

                    <Toggle handleClick={handleClick} mode={mode} setMode={setMode} />
                    <FiClipboard
                        className=' m-auto opacity-50 hover:opacity-100  transition-opacity duration-300'
                        onClick={handleClipboard}
                    />
                </div>
            )}
        </>
    );
};

export default ResultTextBox;
