<template>
  <div style="position: relative;">
    <div id="projects" class="scroll-target"></div>
    <div class="projects">
      <icon-circle-grid-small class="circle-grid" />
      <div class="section-header">
        <h1 id="projects" class="section-title">Projects</h1>
        <p class="section-subtitle">Here are some of my projects that I work with in the past. <br>Some of it are my self-published NPM Packages.</p>
      </div>

      <div class="project-list">
        <single-project v-for="(project, key) in projects" :key="key" :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data() {
    return {
      projects: [
        {
          title: 'Searchie',
          tech: ['Laravel', 'VueJS'],
          job: 'UI/UX Logic Implementation',
          tagline: 'Searchie - A Better Way To Deliver Video',
          url: 'https://www.searchie.io',
          image: 'searchie.png'
        },
        {
          title: 'Paykickstart',
          tech: ['Laravel', 'VueJS'],
          job: 'UI/UX Logic Implementation',
          tagline: 'Paykickstart - Focus On Your Product',
          url: 'https://paykickstart.com',
          image: 'paykickstart.png'
        },
        {
          title: 'Zurra',
          tech: ['Laravel', 'VueJS', 'Firebase'],
          job: 'UI/UX Design & Logic Implementation',
          tagline: 'Zurra - Paradise Point',
          url: 'https://paradisepoint.stage.zurra.com',
          image: 'zurra.jpg'
        },
        {
          title: 'Testnetic',
          tech: ['Laravel', 'VueJS'],
          job: 'UI/UX Logic Implementation',
          tagline: 'Testnetic - Faster Development Cycle',
          url: 'https://www.testnetic.com',
          image: 'testnetic.jpg'
        },
        {
          title: 'VueJS Pagination',
          tech: ['VueJS'],
          job: 'Open-source Software',
          tagline: 'VueJS Pagination - Elegant Pagination Component',
          url: 'https://www.npmjs.com/package/@alkeincodes/vuejs-pagination',
          image: 'pagination.gif'
        },
        {
          title: 'VueJS Skeleton Loading',
          tech: ['VueJS'],
          job: 'Open-source Software',
          tagline: 'VueJS Skeleton Loading - Improve Your Loading State',
          url: 'https://www.npmjs.com/package/@alkeincodes/vuejs-skeleton-loading',
          image: 'skeleton.gif'
        }
      ]
    }
  }
}
</script>
