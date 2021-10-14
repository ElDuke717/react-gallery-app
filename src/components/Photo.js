import React from 'react';
import DogPaw from './DogPaw';
//import NotFound from './NotFound';


const Photo = (props) => {
  console.log(props);
  const pawColor =   '#3f4850';
  const pawHeight = 80;
  const pawWidth = 80; 
  
  return(
      <div className="photo-container">
          <header className="results-header">
          <DogPaw width={pawWidth} height={pawHeight} fill={pawColor} />
          <h2>{props.title}</h2>
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
              <img src="//live.staticflickr.com/4556/26788324059_543c4b522d_c.jpg" alt="" />
            </li>
            <li>
              <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
            </li>
            <li>
              <img src="https://live.staticflickr.com/1301/790128327_6acd9abff8_n.jpg" alt="" />
            </li>
            <li>
              <img src="https://live.staticflickr.com/2720/4509159427_8cf8135ed8_k.jpg" alt="" />
            </li>
            <li>
              <img src="https://live.staticflickr.com/65535/51562588693_8661af490e_h.jpg" alt="" />
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