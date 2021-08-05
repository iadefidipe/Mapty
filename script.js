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

navigator.geolocation.getCurrentPosition(
  function (position) {
    //!the success callback function is usually called with a position  parameter
    console.log(position);
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude]
    const map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  },
  function () {
    alert('Could not get your postion');
  }
);

//  TODO: Displaying a map using a 3rd party library leaflet
// ? CDN => COntent delivery network
