<template>
  <header class="inner-header">
    <div class="container">
      <nuxt-link to="/"><icon-footer-logo /></nuxt-link>
      <nav class="inner-header__socials">
        <a href="https://github.com/alkeincodes"><icon-github /></a>
        <a href="mailto:alkein.developments@gmail.com"><icon-google /></a>
        <a href="https://www.youtube.com/c/SimpleWebTutorial"><icon-youtube /></a>
        <a href="https://www.linkedin.com/in/alkein-villajos-9520a017b/"><icon-linkedin /></a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'InnerHeader'
}
</script>
