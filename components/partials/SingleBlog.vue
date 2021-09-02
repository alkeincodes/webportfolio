<template>
  <div class="single-blog">
    <div class="single-blog__image" :style="{'background-image': `url(http://localhost:5000/images/${data.cover})`}"></div>
    <div class="single-blog__details">
      <div class="upper">
        <h3 class="title mb-2">{{ data.title }}</h3>
        <p class="teaser">{{ data.teaser }}</p>
      </div>
      <div class="lower">
        <p class="date">{{ moment(data.createdAt).format('MMMM Do, YYYY') }}</p>
        <strong class="proximity">{{ readingTime(data.content) }} min read</strong>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'SingleBlog',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      time: null
    }
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
