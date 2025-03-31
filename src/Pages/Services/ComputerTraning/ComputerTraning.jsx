import React, { useEffect, useState } from 'react';
import SingleComputerTraning from './SingleComputerTraning';
import MissingAlert from '../../../Components/MissingAlert/MissingAlert';


const ComputerTraning = () => {

    const [computers, setComputers] = useState([])

    useEffect(() => {
        fetch('computerTraning.json')
        .then(res => res.json())
        .then(data => setComputers(data))
    }, [])

    return (
        <div className='w-[98%] mx-auto'>
            <div className='md:grid grid-cols-2 gap-5'>
                {
                    computers.map(computer => <SingleComputerTraning 
                        key={computer.id}
                        computer = {computer}
                    ></SingleComputerTraning>)
                }
            </div>
            <MissingAlert></MissingAlert>
        </div>
    );
};

export default ComputerTraning;