import React, { useEffect, useState } from 'react';
import SingleFarnacy from './SingleFarnacy';

const Farmacy = () => {
    const [farmacy, setFarmacy] = useState([]);

    useEffect(() => {
        fetch('farmacy.json')
        .then(res => res.json())
        .then(data => setFarmacy(data))
    },[])
    return (
        <div className='md:grid grid-cols-2 gap-5'>
            {
                farmacy.map(farm => <SingleFarnacy 
                    key={farm.id}
                    farmacy={farm}
                ></SingleFarnacy>)
            }
        </div>
    );
};

export default Farmacy;