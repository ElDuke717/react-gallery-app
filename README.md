# React Gallery App

## This is the seventh project in the Treehouse Full Stack JavaScript Techdegree and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Please follow the notes below for functionality and layout.

In the project directory, you can run:

### `npm start`

And it will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## General Notes

This project is built from both stateless and stateful components.  State is used independently in the `App.js` component and the `SearchForm.js` component.

The `NotFound` component will show up if a Flickr API query comes back without results.  This can be challenging to find as Flickr has many photos - typing in the query "norwegian toothpaste" or "rusty sailboats" will have no result and show the `NotFound` component.

## Config

Note that the `config.js` file is ignored by Git and not uploaded with the project.  You can add your own config file to the project in a file called `config.js` with the following:

`const apiKey = 'your Flickr API key here';
export default apiKey;`

This will allow you to run the app using your own private key.

## Routes

Note that the project has four routes:  **Home**, **Puppies**, **Dogs** and **Cats**.  The default setting for **Home** is to return photos from Flickr with the tags "pets".  

You may search for a topic from the search bar in other routes and the app will reroute you to the **Results** route.  

The title for each route will show up above the photos and is rendered via props for each.

Note also that the title in the home route will update the title dynamically to reflect the search term that was put into the search field.

## Data Requests 

Data requests are made using Axios.  Note that there are five separate data requests - one for **Home** to get the initial pics, and one each for the other routes (e.g. `getPuppies` amd so on) as well as a separate request for searches.  The first four queries are run when the app is loaded, the `searchPics` query is run when an item is entered into the search bar.  


## Loading indicators

This app uses the ```LoadingIndicator``` library that is an installed dependancy.  Loading indicators show up between routes when an Flickr API call is made.  

There is also logic in ```App.js``` that helps with rendering of the loading indicators.

This is a work in progress and will be refined later.  It is functional and should meet th criteria for "Exceeds Expectations".

## Displaying photos

Please note that the display is limited to 24 photos per query.  Each photo receives a specific key as assigned by the Flickr API using the id attribute assigned to each photo and delivered as part of the request.

Each photo can be clicked on and it will take the user to the photo's originating Flickr page.

## CSS styling

Numerous unique styling attributes have been added to the project to make is unique.  The official Flickr logo has been used twice and formatted and sized appropriately so that it fits into the flow of the surrounding text.  The text and backgound have been given unique colors and emojis have been added to keep the page interesting.  

`DogPaw` svg elements have been added to the search bar and as decorations for the page.  SVG is rendered to the page  using React components.  The colors are determined via props.

## Cross-Browser Consistency   

The app has been tested in the latest versions of Chrome, Firefox and Microsoft Edge.


## Exceeds Criteria

1. Browser Navigation works for the Search Route: the URL paths are set-up with ```componentWillUpdate()``` so that the pictures shown are from a query that matches the current URL.

2. 404 Error - when a URL does not match an existing route, a helpful 404 message is displayed with a red dog paw element to let the user know the entered URL does not exist.

3. Loading Indicator: When the app reloads, a loading message is displayed.  React Promise Tracker and Load Spinner Indicator are both used for a loading indicator message and animation.  They are based on the loading indicator found here: https://www.basefactor.com/react-how-to-display-a-loading-indicator-on-fetch-calls.  I would have liked to figure out how to make the ```Results``` component dissappear while the ```Loading``` component shows up, but I haven't figured out how to make this work yet.

4. No matches - see notes above for **NotFound**.  If you enter a strange query into the search field ("norwegian toothpaste" or "rusty sailboats") you will see the results not found message displayed.
