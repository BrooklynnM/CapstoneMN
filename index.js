import Navigo from "navigo";
import { capitalize } from "lodash";
import { Header, Nav, Main, Footer } from "./Components";
import * as state from "./store";
import axios from "axios";
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
