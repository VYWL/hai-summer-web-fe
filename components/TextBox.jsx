import React from "react";

const LoadingText = () => {
    return (
        <>
            <span className='skeleton-box h-5 w-1/4 inline-block'></span>
            <span className='skeleton-box h-5 w-1/3 inline-block ml-1'></span>
            <span className='skeleton-box h-5 w-1/2 inline-block'></span>
            <span className='skeleton-box h-5 w-1/3 inline-block ml-1'></span>
            <span className='skeleton-box h-5 w-1/5 inline-block'></span>
            <span className='skeleton-box h-5 w-3/4 inline-block ml-1'></span>
        </>
    );
};

const RefineTextBox = ({ text }) => {
    return text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
};

export { LoadingText, RefineTextBox };
