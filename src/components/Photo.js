import React from 'react';
import DogPaw from './DogPaw';
//import NotFound from './NotFound';


const Photo = () => {
  const pawColor =   '#3f4850';
  const pawHeight = 80;
  const pawWidth = 80; 
  return(
      <div class="photo-container">
          <header className="results-header">
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          <h2>Results</h2>
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          </header>
          <ul>
            <li>
              <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
            </li>
            
          </ul>
          <footer className="results-footer">
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          </footer>
        </div>
    )
  }

  export default Photo;