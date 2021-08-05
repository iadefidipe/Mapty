'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

/*

    TODO: Using the GEOLOCATIOn API
    * it is an API provided  by the browser, there are serveral other APIs provided by the browser like the DOM, intersectionObserver

    ? takes two callback functions, the 1st one is called when the browser sucess fully gets the coordinate of the current position of the user. the 2nd is called when there is an error in getting the coordinates of the user

*/

navigator.geolocation.getCurrentPosition( function(position){ //!the success callback function is usually called with a position  parameter
    console.log(position);
    const {latitude,longitude} = position.coords;
    console.log(latitude, longitude)
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`)

}, function(){
    alert ('Could not get your postion')
})