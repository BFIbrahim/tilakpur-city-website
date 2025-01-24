import React, { useEffect, useState } from 'react';
import SingleInternet from './SingleInternet';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';

const Internet = () => {

    const [internets, setInternets] = useState([]);
    useEffect(() => {

        fetch('internet.json')
            .then(res => res.json())
            .then(data => setInternets(data))

    }, [])

    return (
        <div>
            <div className='md:grid grid-cols-2 gap-5 w-[98%] mx-auto'>
                {
                    internets.map(internet => <SingleInternet
                        key={internet.id}
                        internet={internet}
                    ></SingleInternet>)
                }
            </div>
            <MissingAlert></MissingAlert>
        </div>
    );
};

export default Internet;