import React from 'react';
import { Link } from 'react-router-dom';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';

const Blood = () => {
    return (
        <div>
            <div className='p-10 bg-pink-100'>
                <h1 className=' text-xl font-bold'>তিলকপুর ইসলামিয়া ডায়াগনস্টিক সেন্টার এ যোগাযোগ করতে পারেন</h1><br />
                <h2>রক্ত দান একটি মহৎ গুন, আপনার একব্যাগ রক্তের মাধ্যমে অন্য কারো একজনের উপকার হতে পারে। আজকে আপনার রক্ত অন্য কারো সাহায্যে কাজে আসবে ঠিক তেমনি কনদিন অন্য কারো রক্ত আপনার বা আপনার পরিবারের মানুষদের প্রয়োজন হতে পারে। তাই যারা রক্ত দানে ইচ্ছুক <Link className='text-blue-600 font-bold'>এখানে কিল্ক</Link> দয়া করে আমাকে মেসেজ করুন যাতে আপনার ইনফরমেশন এই পেজ এ যুক্ত করতে পারি।</h2>
            </div>
            <MissingAlert></MissingAlert>
        </div>
    );
};

export default Blood;