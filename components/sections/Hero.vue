<template>
  <div class="site-hero">
    <div class="site-hero__text">
      <span class="text-secondary">I specialize in</span>
      <h1 class="text-primary">Frontend Development</h1>
      <span class="text-secondary specialize mt-3 mb-4">SCSS/SASS, Responsive Web Design, UI/UX Design</span>
      <div class="cta">
        <button class="button button--primary">My Works</button>
        <button class="button button--primary plain ml-2">Connect</button>
      </div>
    </div>
    <div class="site-hero__text site-hero__text--mobile">
      <div class="text-secondary mb-0">Hello! I'm <span class="text-primary">Alkein Villajos</span></div>
      <p class="specialize">Freelance Frontend Developer</p>
      <div class="cta">
        <button class="button button--primary">My Works</button>
        <button class="button button--primary plain ml-2">Connect</button>
      </div>
    </div>
    <hello-card class="site-hero__card" />

    <div class="site-hero__socials">
      <ul>
        <li>
          <a href="https://github.com/alkeincodes" target="_blank">
            <div class="icon-container"><icon-github /></div>
            <span>Github</span>
          </a>
        </li>
        <li>
          <a href="mailto:alkein.developments@gmail.com">
            <div class="icon-container"><icon-google /></div>
            <span>Google</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/SimpleWebTutorial" target="_blank">
            <div class="icon-container"><icon-youtube /></div>
            <span>Youtube</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alkein-villajos-9520a017b/" target="_blank">
            <div class="icon-container"><icon-linkedin /></div>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="site-hero__wordings">
      <h1>Creative</h1>
      <h1>Independent</h1>
      <h1>Committed</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
