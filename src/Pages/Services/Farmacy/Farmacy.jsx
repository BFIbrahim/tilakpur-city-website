import React, { useEffect, useState } from 'react';
import SingleFarnacy from './SingleFarnacy';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';

const Farmacy = () => {
    const [farmacy, setFarmacy] = useState([]);

    useEffect(() => {
        fetch('farmacy.json')
        .then(res => res.json())
        .then(data => setFarmacy(data))
    },[])
    return (
    <div>
                <div className='md:grid grid-cols-2 gap-5'>
            {
                farmacy.map(farm => <SingleFarnacy 
                    key={farm.id}
                    farmacy={farm}
                ></SingleFarnacy>)
            }
        </div>
        <MissingAlert></MissingAlert>
    </div>
    );
};

export default Farmacy;