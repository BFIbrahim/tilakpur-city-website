import React from 'react';

const SingleFarnacy = ({ farmacy }) => {
    console.log(farmacy)

    const { FarmacyName, Admin, Location, Contact } = farmacy

    return (
        <div>
            <div className='bg-pink-100 p-5 my-5'>
                <h1 className='text-2xl md:text-4xl font-bold'>{FarmacyName}</h1>
                <p> <span className='font-bold text-blue-800'>ঠিকানা:</span> {Location}</p>
                <p className='font-bold mt-2'><span className='font-bold text-blue-800'>মোবাইল নাম্বার:</span> {Contact}</p>
            </div>
        </div>
    );
};

export default SingleFarnacy;