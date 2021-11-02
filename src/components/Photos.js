//import { getByTitle } from '@testing-library/dom';
import React from 'react';
import DogPaw from './DogPaw';
import NotFound from './NotFound';
import Photo from './Photo'


const Photos = (props) => {
  const pawColor =   '#3C7BAA';
  const pawColor1 =   '#6C925A';
  const pawColor2 =   '#CE8614';
  const pawColor3 = '#4c440a';
  const pawHeight = 80;
  const pawWidth = 80; 
  
  const results = props.pics;
  let photo;
  if (results.length > 0) {
    photo = results.map(pic =>
      <Photo url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} link={`https://www.flickr.com/photos/${pic.owner}/${pic.id}`} key={pic.id} />
      );
  } else {
    photo = <NotFound />
  }
 
  return(
      <div className="photo-container">
          <header className="results-header">
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor2} />
          <h2>{props.title}</h2>
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor1} />
          </header>
          <ul >
            {photo}
          </ul>
          <footer className="results-footer">
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor1} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor2} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor3} />
          </footer>
        </div>
    )
  }

  export default Photos;