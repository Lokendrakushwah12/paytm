import React from 'react';

const Spinner = () => {
    const bars = Array(12).fill(0);
    return (
        <div className="sonner-loading-wrapper">
            <div className="sonner-spinner">
                {bars.map((_, i) => (
                    <div className="sonner-loading-bar" key={`spinner-bar-${i}`} />
                ))}
            </div>
        </div>
    );
};

export default Spinner;