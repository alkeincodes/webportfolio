<template>
  <div>
    <site-header />
    <div class="container">
      <hero />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    this.$axios.get('/projects').then(({data}) => {
      console.log('data: ', data)
    }).catch(e => {
      console.log('@error: ', e)
    })
  }
}
</script>
