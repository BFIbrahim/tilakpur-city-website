import React, { useEffect, useState } from 'react';
import SingleSchool from './SingleSchool';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';


const School = () => {

    const [schools, SetSchool] = useState([])

    useEffect(() => {
        fetch('school.json')
            .then(res => res.json())
            .then(data => SetSchool(data))
    }, [])

    return (
        <div>
            <div className='md:grid grid-cols-2 gap-5 w-[98%] mx-auto'>
                {
                    schools.map(school => <SingleSchool
                        key={school.id}
                        school={school}
                    ></SingleSchool>)
                }
            </div>

            <MissingAlert></MissingAlert>
        </div>
    );
};

export default School;