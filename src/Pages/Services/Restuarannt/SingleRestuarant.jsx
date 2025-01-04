import React from 'react';

const SingleRestuarant = ({ restuarnt }) => {

    const {RestuarantName, Location, Website, Contact} = restuarnt

    return (
        <div>
            <div className='bg-pink-100 p-5 my-5'>
                <h1 className='text-2xl md:text-4xl font-bold'>{RestuarantName}</h1>
                <p className='mt-3'> <span className='font-bold text-blue-800'>ঠিকানা:</span> {Location}</p>
                <p className='font-bold mt-2'><span className='font-bold text-blue-800'>মোবাইল নাম্বার:</span> {Contact}</p>
                <p className='font-bold mt-2'><span className='font-bold text-blue-800'>ওয়েবসাইট:</span> {Website}</p>
            </div>
        </div>
    );
};

export default SingleRestuarant;