import React from 'react';

const SingleDoctors = ({doctor}) => {
    console.log(doctor)
    const {DoctorName, Location, Speciality, Contact} = doctor
    return (
        <div>
            <div className='bg-pink-100 p-5 my-5'>
                <h1 className='text-2xl md:text-4xl font-bold'>{DoctorName}</h1>
                <h5 className='md:text-xl mt-2 mb-2'>Speciality: {Speciality}</h5>
                <p>Location: {Location}</p>
                <p className='font-bold mt-2'>Contact: {Contact}</p>
                <button className='btn bg-green-500 text-white hover:text-black mt-3'>বিস্তারিত দেখুন</button>
            </div>
        </div>
    );
};

export default SingleDoctors;