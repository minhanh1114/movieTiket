import React from 'react';

const BlurPrimary = ({ top = 'auto', bottom = 'auto', right = 'auto', left = 'auto' }) => {
    return (
        <div
            className="absolute  bg-primary/25 blur-3xl w-72 h-72 rounded-full -z-50"
            style={{ top: top, bottom: bottom, right: right, left: left }}
        ></div>
    );
};

export default BlurPrimary;
