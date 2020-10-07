// importing all as a Module object
import * as components from "./components";
// importing all by name
import { Header, Nav, Main, Footer } from "./components";

function render(st = state.Home) {
  document.querySelector(“#root”).innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
