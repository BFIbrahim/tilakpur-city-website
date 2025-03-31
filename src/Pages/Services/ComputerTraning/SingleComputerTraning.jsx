import React from 'react';

const SingleComputerTraning = ({computer}) => {
    const {Name, Address, ContactNumber} = computer
    return (
        <div>
            <div className='bg-pink-100 p-10 rounded-md'>
                <h1 className='text-xl font-bold'>{Name}</h1>
                <p><span className='text-blue-600'>ঠিকানাঃ</span> {Address}</p>
                <p><span className='text-blue-600'>মোবাইলঃ</span> {ContactNumber}</p>
            </div>
        </div>
    );
};

export default SingleComputerTraning;