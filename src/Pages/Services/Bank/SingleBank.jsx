import React from 'react';

const SingleBank = ({Bank}) => {
    console.log(Bank)

    const {bankName, address, phoneNumber} = Bank
    return (
        <div>
            <div className='bg-pink-100 rounded-md p-10 mb-2'>
                <h1 className='text-xl font-bold'>{bankName}</h1>
                <p>ঠিকানাঃ {address}</p>
                <p><span className='font-bold text-blue-600'>মোবাইলঃ</span> {phoneNumber}</p>
            </div>
        </div>
    );
};

export default SingleBank;