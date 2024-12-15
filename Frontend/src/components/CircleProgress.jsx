
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const CircleProgress = ({ percent, colorFrom, colorTo, children, className, animationDuration, delay }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const [offset, setOffset] = useState(circumference);
    const circleRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                // Start the animation after the specified delay
                setTimeout(() => {
                    const newOffset = circumference - (percent / 100) * circumference;
                    setOffset(newOffset);
                }, delay * 1000); // Delay is in seconds, so we convert to milliseconds
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1, // Adjust threshold as needed
        });

        if (circleRef.current) {
            observer.observe(circleRef.current);
        }

        return () => {
            if (circleRef.current) {
                observer.unobserve(circleRef.current);
            }
        };
    }, [percent, circumference, delay]);

    const circleStyle = {
        transition: `stroke-dashoffset ${animationDuration}s ease-in-out`,
        strokeDasharray: circumference,
        strokeDashoffset: offset,
        stroke: `url(#grad${colorFrom.replace('#', '')}${colorTo.replace('#', '')})`,
    };

    return (
        <div className={`flex justify-center items-center ${className}`} ref={circleRef}>
            <svg height="120" width="120" className="rotate-[-90deg] rounded-full">
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="lightgray"
                    strokeWidth="8"
                    fill="none"
                />
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    strokeWidth="8"
                    fill="none"
                    style={circleStyle}
                />
                <defs>
                    <linearGradient id={`grad${colorFrom.replace('#', '')}${colorTo.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: colorFrom, stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: colorTo, stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute">
                {children}
            </div>
        </div>
    );
};

CircleProgress.propTypes = {
    percent: PropTypes.number.isRequired,
    colorFrom: PropTypes.string.isRequired,
    colorTo: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    animationDuration: PropTypes.number,
    delay: PropTypes.number,
};

CircleProgress.defaultProps = {
    animationDuration: 1,
    delay: 0,
};

export default CircleProgress;
