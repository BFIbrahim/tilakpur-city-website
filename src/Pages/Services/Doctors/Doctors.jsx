import React, { useEffect, useState } from 'react';
import SingleDoctors from './SingleDoctors';

const Doctors = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[] )

    return (
        <div className='md:grid grid-cols-2 gap-5'>
           {
            doctors.map(doctor => <SingleDoctors
                key={doctor.id}
                doctor={doctor}
            ></SingleDoctors>)
           }
        </div>
    );
};

export default Doctors;