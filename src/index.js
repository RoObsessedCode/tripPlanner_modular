const buildMarker = require("./marker");

const mapboxgl = require("mapbox-gl");


mapboxgl.accessToken = "pk.eyJ1IjoiaGthaWxpdSIsImEiOiJjajhicnlzanEwMThzMzNtc28wbXBuMHhvIn0.GUmRnpXiT6RQz-8qlixaLg";

  const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack coordinates
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('activity', [-74.009, 40.705]);
marker.addTo(map);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
