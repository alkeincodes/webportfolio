<template>
  <div>
    Admin Dashboard
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  async beforeMount() {
    const isLoggedIn = await this.$store.dispatch('auth/authenticate', {token: localStorage.getItem('jwt')})

    if(!isLoggedIn) {
      this.$router.push('/')
    }
  }
}
</script>
