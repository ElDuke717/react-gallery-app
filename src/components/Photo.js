import React from 'react';


//Renders the photos as list items.
const Photo = (props) => (
    <li className="photo">
        <a href={props.link}><img src={props.url} alt ="" /></a>
    </li>
);

export default Photo;