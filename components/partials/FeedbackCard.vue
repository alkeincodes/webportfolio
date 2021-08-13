<template>
  <div class="feedback-card">
    <div class="card-wrapper">
      <div class="card">
        <div class="card__upper">
          <img :src="require(`~/assets/images/clients/${data.image}.jpg`)" alt="">
          <div class="feedback-content">
            <div class="header">
              <h5>{{ data.name }} • {{ data.project }}</h5>
              <icon-quote />
            </div>
            <icon-stars />
          </div>
        </div>
        <p><i>"{{ data.comment }}"</i></p>
      </div>
      <div class="accent-container">
        <div class="line-accent" />
        <div class="line-accent" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackCard',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
