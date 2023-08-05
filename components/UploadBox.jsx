const UploadBox = ({ children, isUploaded = false }) => {
    const boxStyle = `min-h-[30vh] h-auto px-2 py-6 border-2 rounded-2xl group flex flex-col items-center justify-center border-dashed border-${
        isUploaded ? "green-500" : "blue-400"
    } transition-all duration-500 ease-in-out`;

    return (
        <div className='w-full p-4 pt-0 rounded-2xl flex flex-col gap-12'>
            <div className={boxStyle}>{children}</div>
        </div>
    );
};

export default UploadBox;
