

const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "url(http://i.imgur.com/D9574Cu.png)",
  restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
  activity: "url(http://i.imgur.com/WbMOfMl.png)"
};

const marker = function (type, coordinates) {


  let img;
  if (type === 'activity') {
    img = iconURLs.activity;
  } else if (type === 'restaurant') {
    img = iconURLs.restaurants;
  } else if (type === 'hotel') {
    img = iconURLs.hotels;
  }

  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = img;
  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);


}

module.exports = marker;
