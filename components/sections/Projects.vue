<template>
  <div style="position: relative;">
    <div class="projects">
      <icon-circle-grid-small class="circle-grid" />
      <div class="section-header">
        <h1 class="section-title">Projects</h1>
        <p class="section-subtitle">Here are some of my projects that I work with in the past. <br>Some of it are my self-published NPM Packages.</p>
      </div>

      <div class="project-list">
        <single-project />
        <single-project />
        <single-project />
        <single-project />
        <single-project />
        <single-project />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project'
}
</script>
