const LoadingBox = ({ children }) => {
    return (
        <div className='p-4'>
            <div className=' bg-gray-100 w-full p-2 flex flex-wrap rounded-lg'>
                <div className='w-full p-2'>
                    <div className='flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300'>
                        <div className='flex flex-col flex-grow'>
                            <div className='p-6 text-left relative flex-grow'>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingBox;
