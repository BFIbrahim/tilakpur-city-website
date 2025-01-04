import React from 'react';
import { Link } from 'react-router-dom';

const DafaultPage = () => {
    return (
        <div>
            <div className='bg-sky-200 p-5 rounded-sm w-[96%] mx-auto text-2xl font-semibold mt-10'>
                শীঘ্রয় আসছে, এই পেজ এর কোন ডাটা আপাতত পাওয়া যায়নি। কাজ চলছে। আপনাদের খোজে যদি কেও থাকে এই পেজ এ যুক্ত করার মতো তাহলে <Link to="/developer"  className='text-blue-600'>এখানে ক্লিক করে</Link> আমার পার্সোনাল প্রোফাইল এ মেসেজ করুন। ধন্যবাদ
            </div>
        </div>
    );
};

export default DafaultPage;