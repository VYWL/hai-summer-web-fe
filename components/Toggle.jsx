const Toggle = ({ handleClick, mode, setMode }) => {
    const handleSummrizeButton = () => {
        handleClick(!mode);
        setMode(p => !p);
    };

    return (
        <div className='scale-75'>
            <div className='toggle colour'>
                <input
                    id='check-toggle'
                    className='toggle-checkbox hidden'
                    type='checkbox'
                    checked={mode}
                    onChange={handleSummrizeButton}
                />
                <label
                    htmlFor='check-toggle'
                    className='toggle-label block w-12 h-6 rounded-full transition-color duration-150 ease-out'
                ></label>
            </div>
        </div>
    );
};

export default Toggle;
