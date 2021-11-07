import { render } from '@testing-library/react';
import React from 'react';
import DogPaw from './DogPaw';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner'

//This component gives a loading message when the app is pulling search results from Flickr.
const Loading = () => {
    render()
    const { promiseInProgress } = usePromiseTracker();
    const pawColor =   '#3C7BAA';
    const pawColor1 =   '#6C925A';
    const pawColor2 =   '#CE8614';
    const pawColor3 = '#4c440a';
    const pawHeight = 80;
    const pawWidth = 80; 
    return(
    promiseInProgress &&
    <div className="loading-results">
      <h1>Loading pics now...</h1>
    {/* inline styling for the loading indicator */}
    <div  style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
        }}
    ></div>
      <Loader type="ThreeDots" color="#eb8b0d" height="200" width="200" />
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