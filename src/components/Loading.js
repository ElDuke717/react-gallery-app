import React from 'react';
import DogPaw from './DogPaw';


//The loading component is the view shown while axios is doing it's HTTP request.
const Loading = () => {
  const pawColor =   '#3C7BAA';
  const pawColor1 =   '#6C925A';
  const pawColor2 =   '#CE8614';
  const pawColor3 = '#4c440a';
  const pawHeight = 80;
  const pawWidth = 80; 

  return (
    <div className="photo-container">
          <header className="results-header">
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor2} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor3} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor1} />
          </header>
          <p className="loading-before-results">Loading your pics...</p>
          <footer className="results-footer">
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor1} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor2} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor3} />
          </footer>
        </div>
    
  ) 
};

export default Loading