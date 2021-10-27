import React from 'react';
import DogPaw from './DogPaw';

const FourOFour = () => {
    const pawColor =   '#BD0202';
    const pawHeight = 100;
    const pawWidth = 100; 
    return (
   
    <li className="fourofour">
    
    <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
    <h1><strong>404</strong></h1>
    <h3>Page Not Found</h3>

    <p>This page could not be found.</p>
  </li>
);
}

export default FourOFour