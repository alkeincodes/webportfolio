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
          <nav class="socials">
            <a href="https://github.com/alkeincodes"><icon-github /></a>
            <a href="mailto:alkein.developments@gmail.com"><icon-google /></a>
            <a href="https://www.youtube.com/c/SimpleWebTutorial"><icon-youtube /></a>
            <a href="https://www.linkedin.com/in/alkein-villajos-9520a017b/"><icon-linkedin /></a>
          </nav>
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
