<template>
  <div class="show-blog">
    <inner-header />
    <div v-if="blog" class="container">
      <div class="show-blog__header text-center">
        <p>{{ moment(blog.createdAt).format('MMMM Do, YYYY') }} • {{ readingTime(blog.content) }} min read</p>
        <h1 class="blog-title">{{ blog.title }}</h1>
      </div>
      <div class="show-blog__image">
        <img :src="`http://localhost:5000/images/${blog.cover}`" alt="">
      </div>
      <div class="show-blog__content">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="blog.content" />
      </div>
    </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      blog: null
    }
  },
  created() {
    this.$axios.get(`/blogs/${this.$route.params.id}`).then(({ data }) => {
      console.log('@data: ', data)
      this.blog = data
    })
  },
  methods: {
    moment,
    readingTime(text) {
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      return time;
    }
  }
}
</script>
