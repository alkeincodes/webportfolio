<template>
  <div >
    <div class="card-wrapper">
      <div class="card hello-card__container">
        <img class="circle-grid" src="~/assets/images/circle-grid.png">
        <div class="icon-holder">
          <icon-wave width="70" />
        </div>
        <div class="text-holder">
          <span class="text-secondary">Hello! I'm</span>
          <h2 class="text-primary">Alkein</h2>
          <span class="text-secondary">Laravel + Vue Developer</span>
        </div>
      </div>
      <div class="card overlayed" />
      <div class="line-accent" />
      <div class="line-accent" />
    </div>
  </div>
</template>

<script>
    export default {
        name: 'HelloCard'
    }
</script>
