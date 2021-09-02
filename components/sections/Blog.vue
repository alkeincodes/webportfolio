<template>
  <div class="blog">
    <div class="section-header">
      <h1 class="section-title">Blog</h1>
    </div>

    <div class="blog-list">
      <template v-if="blogs.length">
        <nuxt-link v-for="(blog, key) in blogs" :key="key" :to="`/blog/${blog._id}`" >
          <single-blog :data="blog" />
        </nuxt-link>
      </template>
      <template v-else>
        <div class="text-center">
          <span>No blog post yet.</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      blogs: []
    }
  },
  mounted() {
    this.$axios.get('/blogs').then(({ data }) => {
      this.blogs = data
    })
  }
}
</script>
