<template>
  <div>
    <site-header />
    <div class="container">
      <hero />
      <projects />
    </div>
    <client-feedback />
    <div class="container">
      <blog />
    </div>

    <footer class="footer">
      <div class="container">
        <div class="contact-me">
          <input class="input-name" type="text" placeholder="Name">
          <input type="text" placeholder="Email">
          <textarea placeholder="Let's talk about your project." rows="5" cols="7" />
          <button class="button button--orange">Send</button>
        </div>
        <div class="watermark">
          <icon-footer-logo />
          <span>This website is made with ❤️ by me</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
