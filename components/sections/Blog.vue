<template>
  <div class="blog">
    <div class="section-header">
      <h1 class="section-title">Blog</h1>
    </div>

    <div class="blog-list">
      <nuxt-link to="/">
        <single-blog />
      </nuxt-link>
      <nuxt-link to="/">
        <single-blog />
      </nuxt-link>
      <nuxt-link to="/">
        <single-blog />
      </nuxt-link>
      <nuxt-link to="/">
        <single-blog />
      </nuxt-link>
      <nuxt-link to="/">
        <single-blog />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog'
}
</script>

<style>

</style>
