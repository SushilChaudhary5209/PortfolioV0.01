
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percent, colorFrom, colorTo, animationDuration, animationDelay }) => {
    const [width, setWidth] = useState(0);
    const progressRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setTimeout(() => {
                    setWidth(percent);
                }, animationDelay * 1000); // Convert delay to milliseconds
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1, // Adjust threshold as needed
        });

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, [percent, animationDelay]);

    const progressBarStyle = {
        width: `${width}%`,
        background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
        transition: `width ${animationDuration}s ease-in-out`,
    };

    return (
        <div ref={progressRef} className="relative w-full bg-gray-200 rounded-full h-4">
            <div
                className="h-4 rounded-full"
                style={progressBarStyle}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                {percent}%
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    percent: PropTypes.number.isRequired,
    colorFrom: PropTypes.string.isRequired,
    colorTo: PropTypes.string.isRequired,
    animationDuration: PropTypes.number,
    animationDelay: PropTypes.number,
};

ProgressBar.defaultProps = {
    animationDuration: 1,
    animationDelay: 0,
};

export default ProgressBar;
