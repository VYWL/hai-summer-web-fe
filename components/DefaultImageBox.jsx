const DefaultImageBox = ({ text }) => {
    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <img src='/public/assets/hylion.png' alt='hylion' className='filter grayscale opacity-30 w-16 ' />

            <span className='text-gray-400 text-base no-user-select font-normal mt-4'>{text}</span>
        </div>
    );
};

export default DefaultImageBox;
