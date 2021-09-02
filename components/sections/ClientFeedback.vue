<template>
  <div class="client-feedback">
    <div id="feedback" class="scroll-target"></div>
    <div class="line-grid"></div>
    <div class="section-header mb-4">
      <h1 class="section-title">Client Feedback</h1>
      <p class="section-subtitle">Hear what some of my clients have to say.</p>
    </div>

    <div class="client-cards">
      <feedback-card v-for="(feedback, key) in feedbacks" :key="key" :data="feedback" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientFeedback',
  data() {
    return {
      feedbacks: [
        {
          image: 'client-2',
          name: 'Phillipe Leroy',
          project: 'EZInvoice',
          comment: 'Alkein have strong knowledge in frontend works such as vuejs and UI design implementation. I will hire him again if he\'s available in the future'
        },
        {
          image: 'client-1',
          name: 'Anthony Bodin',
          project: 'Testnetic',
          comment: 'Great guy to work with.'
        },
        {
          image: 'client-3',
          name: 'Todd Meaher',
          project: 'Zurra',
          comment: 'Alkein is excellent with quickly understanding issues and completing tasks quickly. I am re-hiring him to continue Vue.js clean. He is fast and very knowledgeable.'
        },
      ]
    }
  }
}
</script>
