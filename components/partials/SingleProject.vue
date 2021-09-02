<template>
  <div class="single-project">
    <div class="single-project__thumb" :style="{backgroundImage: `url('${project.image}')`}">
      <div class="title-container">
      <span>{{ project.title }}</span>

      <div class="tags-container">
        <div  v-for="(tech, key) in project.tech" :key="key" class="tags">{{ tech }}</div>
      </div>
      </div>
    </div>
    <div class="single-project__details">
      <p class="job-function">{{ project.job }}</p>
      <h1 class="project-title">{{ project.tagline }}</h1>
      <a :href="project.url" target="_blank" class="read-more">Preview <icon-right /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProject',
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
