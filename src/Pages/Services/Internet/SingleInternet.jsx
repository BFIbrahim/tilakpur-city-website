import React from 'react';

const SingleInternet = ({internet}) => {
    const {Name, Address, ContactNumber} = internet
    return (
        <div>
            <div className='bg-pink-100 rounded-md p-10 mb-5'>
                <h1 className='text-xl font-bold'>{Name}</h1>
                <p><span className='font-bold text-blue-600'>ঠিকানাঃ</span>{Address}</p>
                <p> <span className='font-bold text-blue-600'>মোবাইলঃ</span>  {ContactNumber}</p>
            </div>
        </div>
    );
};

export default SingleInternet;