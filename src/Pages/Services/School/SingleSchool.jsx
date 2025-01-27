import React from 'react';

const SingleSchool = ({school}) => {
    const {Name, Address, ContactNumber} = school;
    return (
        <div className='bg-pink-100 p-10 rounded-md'>
            <h1 className='text-xl font-bold'>{Name}</h1>
            <p><span className='font-bold text-blue-600'>ঠিকানাঃ </span> {Address}</p>
            <p><span className='font-bold text-blue-600'>মোবাইলঃ </span> {ContactNumber}</p>
        </div>
    );
};

export default SingleSchool;