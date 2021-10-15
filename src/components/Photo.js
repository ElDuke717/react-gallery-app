import React from 'react';

const Photo = (props) => (
    <li className="photo">
        <a href={props.link}><img src={props.url} alt ="" /></a>
    </li>
);

export default Photo;