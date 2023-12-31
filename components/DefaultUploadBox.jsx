const DefaultUploadBox = ({ handleClick }) => {
    return (
        <>
            <svg
                id='upload_folder_image'
                className='w-16 aspect-square group-hover:scale-110 cursor-pointer duration-500 ease-in-out'
                viewBox='0 0 48 48'
                onClick={handleClick}
            >
                <g id='Open_Folder-2' data-name='Open Folder'>
                    <path
                        d='m45 18h-4v-4a2.996 2.996 0 0 0 -3-3h-15.25a2.9991 2.9991 0 0 1 -2.33-1.11l-1.96-2.41a3.9846 3.9846 0 0 0 -3.1-1.48h-11.36a2.996 2.996 0 0 0 -3 3v29.57a3.3672 3.3672 0 0 0 1.01 2.42 3.3672 3.3672 0 0 0 2.42 1.01h33.66a3.441 3.441 0 0 0 3.3-2.47l5.53-18.97a2.003 2.003 0 0 0 -1.92-2.56z'
                        fill='#376cfb'
                    />
                    <path
                        d='m44.9987 18h-28.4262a3.43 3.43 0 0 0 -3.2925 2.47l-5.56 19.0614a3.4286 3.4286 0 0 1 -3.2914 2.4686h33.6638a3.43 3.43 0 0 0 3.2933-2.47l5.5331-18.97a2 2 0 0 0 -1.9201-2.56z'
                        fill='#4294ff'
                    />
                </g>
            </svg>
            <p className='text-gray-400 no-user-select'>Upload your image(png, jpeg) here</p>
        </>
    );
};

export default DefaultUploadBox;
