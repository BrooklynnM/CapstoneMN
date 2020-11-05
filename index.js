import Navigo from "navigo";
import { capitalize } from "lodash";
import { Header, Nav, Main, Footer } from "./Components";
import * as state from "./store";
import axios from "axios";
import "./env";
const router = new Navigo(window.location.origin);
function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();
}
render(state.Home);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  // handle the response from the API
  .then(response => {
    // for each post in the response Array,
    response.data.forEach(post => {
      // add it to state.Blog.posts
      state.Blog.posts.push(post);
    });
    const params = router.lastRouteResolved().params;
    if (params) {
      render(state[params.page]);
    }
  });

axios
  .get(`https://api.github.com/users/${BrooklynnM}/repos`, {
    headers: {
      Authorization: `token ${e5529347ad2ab6722179e13dc47e6c0ced62f6db}`
    }
  })
  .then(response => console.log(response.data));

// Initialize and add the map
function initMap() {
  const merlenorman = { lat: 38.5936, lng: -89.977666 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: merlenorman
  });
  const marker = new google.maps.Marker({
    position: merlenorman,
    map: map
  });
}

// loadMapsJSAPI();
// function runApp() {
//   // The location of Uluru
//   const uluru = { lat: 38.561, lng: -90.444 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 12,
//     center: uluru
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }
// function loadMapsJSAPI() {
//   const googleMapsAPIKey = "AIzaSyAQ5l4se6K1TE-XPXIxQ282m3DsH2G_hig";
//   const googleMapsAPIURI = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&callback=runApp`;
//   const script = document.createElement("script");
//   script.src = googleMapsAPIURI;
//   script.defer = true;
//   script.async = true;
//   window.runApp = runApp;
//   document.head.appendChild(script);
// }
