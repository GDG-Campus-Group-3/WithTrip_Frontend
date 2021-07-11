import React from 'react';

const Advantage = (props) => {
    return (
        <div className="main-advantage">
            <div className="main-advantage-title">
                <img src={props.img} alt={props.alt} />
                <h3>{props.title}</h3>
            </div>
            <p>{props.children}</p>
        </div>
    )
}

export default Advantage;