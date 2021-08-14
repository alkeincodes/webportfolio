<template>
  <div class="login">
    <div class="form-container">
      <h4 class="mb-4">Login</h4>
      <input v-model="form.email" type="text" placeholder="Email address">
      <input v-model="form.password" type="password" placeholder="Password">
      <button class="button button--primary" @click="login">Login</button>

      <p v-if="error" class="text-danger mt-2">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: 'alkein@test.com',
        password: '5353553'
      },
      error: ''
    }
  },
  watch: {
    form: {
      handler() {
        this.error = ''
      },
      deep: true
    }
  },
  methods: {
    login() {
      this.$axios.post('/login-admin', this.form).then(({ data }) => {
        // console.log('res: ', res)

        localStorage.setItem('jwt', data.token)

        if (data.user) {
          this.$store.dispatch('auth/SET_USER', data.user)
          this.$router.push('/admin')
        }
      }).catch((err) => {
        this.error = err.response.data.error
      })
    }
  }
}
</script>
