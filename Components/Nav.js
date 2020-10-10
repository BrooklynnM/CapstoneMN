// export default () => `
// <nav>
//   <ul class="hidden--mobile nav-links">
//     <li><a href="index.html">Home</a></li>
//     <li><a href="AboutUs.html">About Us</a></li>
//     <li><a href="MakeupSkincare.html">Makeup & Skincare</a></li>
//     <li><a href="Wigs.html">Wigs</a></li>
//     <li><a href="Order.html">Order</a></li>
//     <li><a href="SignUp.html">Sign Up</a></li>
//   </ul>
// </nav>`;

export default links => `
<nav>
  <i class="fas fa-bars"></i>
  <ul class="hidden--mobile nav-links">
  ${links.reduce(
  (html, link) =>
    html +
    `<li><a href="/${link.title !== "Home" ? link.title : ""}" title="${
      link.title
    }" data-navigo>${link.text}</a></li>`,
  ``
)}
  </ul>
</nav>
`;
