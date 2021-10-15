//import { getByTitle } from '@testing-library/dom';
import React from 'react';
import DogPaw from './DogPaw';
import NotFound from './NotFound';
import Photo from './Photo'

const Photos = (props) => {
  console.log(props);
  const pawColor =   '#3f4850';
  const pawHeight = 80;
  const pawWidth = 80; 

  const results = props.pics;
  //console.log(results);
  //console.log(results[0]);
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
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          <h2>{props.title}</h2>
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          </header>
          <ul >
            {photo}
          </ul>
          <footer className="results-footer">
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          </footer>
        </div>
    )
  }

  export default Photos;