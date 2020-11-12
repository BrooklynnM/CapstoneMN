export default () => `
<div class="container">
  <form id="contact" action="https://formspree.io/f/xeqpzoop" method="post">
    <h3>Contact Us</h3>
    <fieldset>
      <input placeholder="your name" type="text"  name="name" required autofocus>
    </fieldset>
    <fieldset>
      <input placeholder="your email address" type="email" name="replyto" required>
    </fieldset>
    <fieldset>
      <textarea placeholder="type your message here...." type="text" name="message" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit">Submit</button>
    </fieldset>
  </form>
</div>
`;
