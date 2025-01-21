import React from 'react';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';

const Ambulence = () => {
    return (
        <div>
            <div className='w-[98%] mx-auto bg-pink-100 p-10 rounded-md'>
                <h1 className='text-xl font-bold'>নওগাঁ এ্যাম্বুলেন্স</h1>
                <p><span className='font-bold text-blue-600'>মোবাইলঃ</span> 01627669222/ 01730324810 / 01730324668  / 01730324669 / 01911-125156 / 01953-921890</p>

                <p><span className='font-bold text-blue-600'>বিশেষ দ্রষ্টব্যঃ</span> এ্যাম্বুলেন্স ভারা করার ক্ষেত্রে ভালো ভাবে কথা বলে নিবেন। কারন গারির কন্ডিশন সবসময় ভালো নাও থাকতে পারে। এই বিষয়ে আমরা দায়ী থাকব না</p>
            </div>
            <MissingAlert></MissingAlert>
        </div>
    );
};

export default Ambulence;