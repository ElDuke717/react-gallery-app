import { render } from '@testing-library/react';
import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
//Loader is a library that the app uses for loading indicators.
import Loader from 'react-loader-spinner'

//This component gives a loading indicator when the app is pulling search results from Flickr, the same as loading but without text.
//it's used along with the Loading component to make a loading indicator with each API call. 
const LoadingBlank = () => {
    render()
    const { promiseInProgress } = usePromiseTracker();
    
    return(
    promiseInProgress &&
    <div className="loading-results">
      
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
      
    </div>
    
    )
};

export default LoadingBlank