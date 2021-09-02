<template>
  <div class="admin-container">
    <div class="admin-blog">
      <div class="admin-blog__composer">
        <input v-model="title" type="text" placeholder="Blog Title" style="width: 100%;"><br>
        <input v-model="teaser" type="text" placeholder="Blog Teaser" style="width: 100%;"><br>
        <input
          id="book_cover"
          type="file"
          class="form-control-file"
          name="selected_cover"
          @change="onFileChange"
        />
        <p class="text-hint">Image preview will show below.</p>
        <div v-if="typeof cover == 'object'">
          <img v-if="imageUrl" :src="imageUrl" height="250" width="400" />
        </div>
        <editor
          v-model="composer"
          api-key="1ltqyetvd3bscsna795bread4ga9pmkge8updj7gd5vo9rya"
          :init="{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap',
              'searchreplace visualblocks code fullscreen',
              'print preview anchor insertdatetime media',
              'paste code help wordcount table codesample'
            ],
            codesample_languages: [
                {text: 'HTML/XML', value: 'markup'},
                {text: 'JavaScript', value: 'javascript'},
                {text: 'CSS', value: 'css'},
                {text: 'PHP', value: 'php'},
            ],
            toolbar:
              'undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent | help | codesample'
          }"
        >
        </editor>

        <button class="button button--primary mt-4" :disabled="isSaving" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'BlogComposer',
  components: {
    Editor
  },
  data() {
    return {
      composer: '',
      title: '',
      teaser: '',
      isSaving: false,
      cover: ''
    }
  },
  async beforeMount() {
    const isLoggedIn = await this.$store.dispatch('auth/authenticate', {token: localStorage.getItem('jwt')})

    if(!isLoggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    submit() {
      this.isSaving = true

      const fd = new FormData()

      fd.append('title', this.title)
      fd.append('content', this.composer)
      fd.append('teaser', this.teaser)
      fd.append('cover', this.cover)

      this.$axios.post('/blogs', fd).then(() => {
        this.isSaving = false
      }).catch((err) => {
        this.isSaving = false
        console.log(err)
      })
    },
    onFileChange (e) {
      const file = e.target.files[0]
      this.imageUrl = URL.createObjectURL(file)
      this.cover = file
    },
  },
}
</script>
