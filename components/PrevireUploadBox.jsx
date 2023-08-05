const PreviewUploadBox = ({ image, sendRequest, changeImage }) => {
    return (
        <>
            <div className='flex justify-center max-w-sm'>
                <img src={image} alt='Preview' className='p-2 object-contain' />
            </div>

            <div className='flex justify-center gap-6'>
                <button
                    onClick={sendRequest}
                    className='my-4 bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-lg'
                >
                    Send Request
                </button>
                <button
                    onClick={changeImage}
                    className='my-4 bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-lg'
                >
                    Other Image
                </button>
            </div>
        </>
    );
};

export default PreviewUploadBox;
