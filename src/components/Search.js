import React from "react";
import { Route, NavLink, Link } from 'react-router-dom';
import Photo from './Photo'
import axios from 'axios';
import config from './config'



//Flickr API solution found at https://stackoverflow.com/questions/68019742/how-to-use-flickr-api-to-make-image-gallery-using-react-native

const apiKey = config;
console.log(config);

const data = {
  method: 'flickr.photos.search',
  api_key: apiKey,
  text: 'puppies', // Search Text
  sort: 'interestingness-desc',
  per_page: 12,
  license: '4',
  extras: 'owner_name,license',
  format: 'json',
  nojsoncallback: 1,
};

const parameters = new URLSearchParams(data);

const url = `https://api.flickr.com/services/rest/?${parameters}`;
console.log(url);

// const getFlickrImageURL = (photo, size) => {
//     let url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${
//       photo.secret
//     }`;
//     if (size) {
//       // Configure image size
//       url += `_${size}`;
//     }
//     url += '.jpg';
//     return url;
//   };

//   axios.get(url)
//   .then(response => response.json())
//   .then(data => (
//     // get an array of image-url
//     data.photos.photo.map((photo) => {
//       return getFlickrImageURL(photo, 'q');
//     })
//   ));


export default Search