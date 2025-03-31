import React, { useEffect, useState } from 'react';

const Pictures = () => {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        fetch('images.json')
            .then(res => res.json())
            .then(data => setPictures(data));
    }, []); // Added dependency array to prevent infinite fetching

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pictures.map((picture, index) => (
                    <div key={index} className="bg-gray-200 p-2 rounded-lg shadow-md">
                        <img src={picture.image} alt={`Image ${index + 1}`} className="w-full h-48 object-cover rounded-md"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pictures;
