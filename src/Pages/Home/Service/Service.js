import React from 'react';
import('./Service.css')

const Service = (props) => {

    const { name, img, Price } = props.service
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Service Fee {Price}</p>
        </div>
    );
};

export default Service;