import React, { useEffect, useState } from 'react';
import SingleBank from './SingleBank';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';

const Bank = () => {

    const [banks, setBanks] = useState([])
    useEffect(() => {
        fetch('bank.json')
            .then(res => res.json())
            .then(data => setBanks(data))
    }, [])

    return (
        <div className='w-[98%] mx-auto'>
            <div className='md:grid grid-cols-2 gap-5'>
                {
                    banks.map(bank => <SingleBank
                        key={bank.id}
                        Bank={bank}
                    ></SingleBank>)
                }
            </div>
            <MissingAlert></MissingAlert>
        </div>
    );
};

export default Bank;