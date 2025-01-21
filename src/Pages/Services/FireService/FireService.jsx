import React from 'react';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';

const FireService = () => {
    return (
        <>
            <div className='md:grid grid-cols-2 gap-10 md:w-[96%] mx-auto'>
                <div className='bg-pink-100 p-10 rounded-md'>
                    <h1 className='text-xl font-bold'>জয়পুরহাট ফায়ার সার্ভিস</h1>
                    <p><span className='font-bold text-blue-600'>ঠিকানাঃ</span> জয়পুরহাট চিনির মেল রোড, জয়পুরহাট - ৫৯০০</p>
                    <p><span className='font-bold text-blue-600'>মোবাইলঃ</span> 01730-002539</p>
                </div>
                <div className='bg-pink-100 p-10 rounded-md'>
                    <h1 className='text-xl font-bold'>নওগাঁ ফায়ার সার্ভিস</h1>
                    <p><span className='font-bold text-blue-600'>ঠিকানাঃ</span>  নওগাঁ</p>
                    <p> <span className='font-bold text-blue-600'>মোবাইলঃ</span>  0741-62000</p>
                </div>
            </div>
            <MissingAlert></MissingAlert>
        </>
    );
};

export default FireService;