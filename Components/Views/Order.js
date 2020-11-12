export default () => `
<h1 class="order-title"> Need to place an order? <br> Place it here!</h1>
<p class="order-p"> During the Covid-19 pandemic we are offering free shipping <br> on orders over $50 or free curbside pickup on all orders! <br> Please complete the form bellow & a confirmation email <br> will be sent to you once your order is received. </p>
<form class="order-form" method="POST">
  <div class="input-field">
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" name="first-name" required>
  </div>
  <div class="input-field">
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" name="last-name" required>
  </div>
  <div class="input-field">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="input-field">
    <label for="phone">Phone Number</label>
    <input type="tel" id="phone" name="phone" required>
  </div>
  <div class="input-field">
    <label for="home-address">Home Address</label>
    <input type="text" id="home-address" name="home-address" required>
  </div>
  <div class="input-field">
    <label for="products-needed">Tell us which products you are in need of.</label>
    <textarea name="products-needed" id="products-needed" name="products-needed" required cols="30" rows="10"></textarea>
  </div>
  <div class="input-field">
    <label for="anything-else">Anything else we need to know?</label>
    <textarea name="anything-else" id="anything-else" cols="30" rows="10"></textarea>
  </div>
  <div class="input-field" id="pickup-selection">
    Mail Order: <input type="radio" name="how" value="Mail Order">
    Curbside Pickup: <input type="radio" name="how" value="Curbside Pickup">
  </div>
  <div class="input-field">
    <select name="payment">
      <option value="payment">Credit Card</option>
      <option value="payment">Gift Card</option>
      <option value="payment">Cash</option>
    </select>
  </div>
  <div class="input-field">
    <label for="credit-card">Credit Card Information</label>
    <input type="text" id="credit-card" name="credit-card" placeholder="xxxx-xxxx-xxxx-xxxx">
  </div>
  <div class="input-field">
    <label for="expiration-date">Expiration Date</label>
    <input type="text" id="expiration-date" name="expiration-date" placeholder=" 01/20">
  </div>
  <div class="input-field">
    <input type="submit" value="Send" id=send-btn>
  </div>
</form>
`;
