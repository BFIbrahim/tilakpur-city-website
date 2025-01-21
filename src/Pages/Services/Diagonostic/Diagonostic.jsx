import React from 'react';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';

const Diagonostic = () => {
    return (
        <>
            <div className='p-10 bg-pink-100'>
                <h1 className='text-2xl font-bold'>ইসলামিয়া ডায়াগনস্টিক সেন্টার</h1>
                <p><span className='font-bold text-blue-700'>ঠিকনাঃ</span> তিলকপুর জিরো পয়েন্ট অর্থাৎ এশিয়া ব্যাংক এর পাশে।</p>
                <p><span className='font-bold text-blue-700'>মোবাইলঃ </span> এখনো পাওয়া যায়নি, যুক্ত করা হবে ইনশাআল্লাহ</p>
            </div>

            <MissingAlert></MissingAlert>
        </>

    );
};

export default Diagonostic;