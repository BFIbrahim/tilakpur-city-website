import React from 'react';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';


const Courier = () => {
    return (
        <div className='w-[98%] mx-auto'>
            <div className='bg-pink-100 p-10 rounded-md'>
                <h1 className='text-xl font-bold'>Stade Fast</h1>
                <p>আক্কেলপুর রাইডারঃ ০১৭২৭৩৭০৭৫১ - জাহিদ</p>
                <p>আদমদিঘি রাইডারঃ ০১৬০০৬০৬০৮৫ - বরকত</p>
                <p>আক্কেলপুর ম্যানেজারঃ ০১৩২৯৬৮৩১১৪</p>
                <p><span className='text-blue-600 font-bold'>বিঃদ্রঃ </span> ইনারা প্রতিনিয়ত তিলকপুর আসে। তবে রাইডার পরিবর্তন হতে পারে সেখত্রে আপনি আক্কেলপুর ম্যানেজার এর নাম্বারে কল করতে পারেন।</p>
            </div>
            <MissingAlert></MissingAlert>
        </div>
    );
};

export default Courier;