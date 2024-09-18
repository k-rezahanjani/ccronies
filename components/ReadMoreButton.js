import React from 'react';
import Image from 'next/image';
import starUrl from '@/public/images/arrowRight.svg?url';

const ReadMoreButton = ({ title }) => {
    return (
        <div className="flex items-center space-x-2 w-44 p-1">
            <button className="capitalize text-white">{title}</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <circle cx="9" cy="9" r="9" transform="matrix(1.19249e-08 1 1 -1.19249e-08 3 3)" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 12L8 12M16 12L12 8M16 12L12 16" stroke="#F99D1C" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

export default ReadMoreButton;
