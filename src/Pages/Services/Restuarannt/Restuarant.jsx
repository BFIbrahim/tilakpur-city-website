import React, { useEffect, useState } from 'react';
import SingleRestuarant from './SingleRestuarant';

const Restuarant = () => {

    const [restuarants, setRestuarant] = useState([])

    useEffect(() => {
        fetch('restuarant.json')
        .then(res => res.json())
        .then(data => setRestuarant(data))
    },[])

    return (
        <div className='md:grid grid-cols-2 gap-5'>
            {
                restuarants.map(restuarant => <SingleRestuarant
                    key={restuarant.id}
                    restuarnt={restuarant}
                ></SingleRestuarant>)
            }
        </div>
    );
};

export default Restuarant;