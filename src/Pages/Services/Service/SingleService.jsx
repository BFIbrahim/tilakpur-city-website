import React from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../Components/DefaultPage/DafaultPage'

const SingleService = ({service}) => {
    console.log(service)
    const {title, image, route} = service
    
    return (
        <Link to={route ? route : DefaultPage}>
            <div className='text-center font-bold shadow-[-1px_3px_20px_-13px_rgba(0,_0,_0,_0.8)] p-8 rounded-xl hover:bg-green-200'>
                <img className='w-20 h-20 md:w-32 md:h-32 mx-auto' src={image} alt="" />
                <h3 className='mt-4 md:text-xl'>{title}</h3>
            </div>
        </Link>
    );
};

export default SingleService;