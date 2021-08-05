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
    // console.log(position);
    const { latitude, longitude } = position.coords;
    // console.log(latitude, longitude);
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude]
    const map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    

      //* We need a way to handle events on the map, so when we click on a particular location on the map we can place markers there. we cant handle this event wuith the traditional addEventListener. there is an event handler method provided by the map itself

      map.on('click', function(mapEvent){
          console.log(mapEvent);
          const {lat,lng} = mapEvent.latlng;


          L.marker([lat,lng])
      .addTo(map)
      .bindPopup(
          L.popup({
              maxWidth: 250,
              minWidth:100,
              autoClose:false,
              closeOnClick:false,
              className: 'running-popup'
          }))
          .setPopupContent('Workout')
      .openPopup();
      })
  },
  function () {
    alert('Could not get your postion');
  }
);

//  TODO: Displaying a map using a 3rd party library leaflet
// ? CDN => COntent delivery network


//  TODO: Displaying a map using a 3rd party library leaflet
