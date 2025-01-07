import React, { useEffect, useState } from 'react';
import SingleDentist from './SingleDentist';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';

const Dentist = () => {

    const [dentist, setDentist] = useState([]);

    useEffect(() => {
        fetch('dentist.json')
            .then(res => res.json())
            .then(data => setDentist(data))
    }, [])

    return (
        <>
            <div className='md:grid grid-cols-2 gap-5'>
                {
                    dentist.map(dent => <SingleDentist
                        key={dent.id}
                        dentist={dent}
                    ></SingleDentist>)
                }
            </div>
            <MissingAlert></MissingAlert>
        </>
    );
};

export default Dentist;