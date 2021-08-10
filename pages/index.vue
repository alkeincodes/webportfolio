<template>
  <div class="container" style="text-align: center; padding: 32px;">
    <ul></ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created() {
    this.$axios.get('/projects').then(({data}) => {
      // console.log('data: ', data)
    })
  }
}
</script>
