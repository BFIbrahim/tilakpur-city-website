import React from 'react';

const SingleDentist = ({ dentist }) => {

    const {DoctorName, Location, Degree, Contact, cemberTime,RegistrationNumber} = dentist

    return (
        <div>
            <div className='bg-pink-100 p-5 my-5'>
                <h1 className='text-2xl md:text-4xl font-bold'>{DoctorName}</h1>
                <h5 className='md:text-xl mt-2 mb-2 font-bold'>{Degree}</h5>
                <p> <span className='font-bold text-blue-800'>রেজি নং:</span> {RegistrationNumber}</p>
                <p> <span className='font-bold text-blue-800'>চেম্বার:</span> {Location}</p>
                <p className='mt-2'><span className='font-bold text-blue-800'>রোগী দেখার সময়:</span> {cemberTime}</p>
                <p className='font-bold mt-2'><span className='font-bold text-blue-800'>মোবাইল নাম্বার:</span> {Contact}</p>
            </div>
        </div>
    );
};

export default SingleDentist;