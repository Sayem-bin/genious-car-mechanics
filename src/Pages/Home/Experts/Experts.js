import React from 'react';

import mechanica1 from "../../../Images/Mechanic/1.jpg"
import mechanica2 from "../../../Images/Mechanic/2.jpg"
import mechanica3 from "../../../Images/Mechanic/3.jpg"
import mechanica4 from "../../../Images/Mechanic/4.jpg"
import Expert from '../Expert/Expert';

const experts = [
    {
        id: 1,
        img: mechanica1,
        name: 'Smith',
        expertize: 'Engine Expert'
    },

    {
        id: 2,
        img: mechanica2,
        name: 'Kiron',
        expertize: 'Engine Expert'
    },
    {
        id: 3,
        img: mechanica3,
        name: 'Babul',
        expertize: 'Engine Expert'
    },
    {
        id: 4,
        img: mechanica4,
        name: 'Rasel',
        expertize: 'Engine Expert'
    },
    {
        id: 5,
        img: mechanica2,
        name: 'Rasel',
        expertize: 'Engine Expert'
    },
    {
        id: 6,
        img: mechanica3,
        name: 'Rasel',
        expertize: 'Engine Expert'
    }
]

const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary my-4">Our Experts </h2>

            <div className='row '>
                {experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}></Expert>)}
            </div>
        </div>
    );
};

export default Experts;