<template>
  <div>
    <div class="site-header" :class="{'header-bg': isScrolling}">
      <nav>
        <a
          class="nav-item"
          href="#hero"
          :class="{active: activeNav == 1}"
          @click="activeNav = 1"
        >
            Home
          </a>
        <a
          class="nav-item"
          href="#projects"
          :class="{active: activeNav == 2}"
          @click="activeNav = 2"
        >
              Works
          </a>
        <a href="#">
            <icon-logo />
        </a>
        <a
          class="nav-item"
          href="#feedback"
          :class="{active: activeNav == 3}"
          @click="activeNav = 3"
        >
          Feedbacks
        </a>
        <a
          class="nav-item"
          href="#blogs"
          :class="{active: activeNav == 4}"
          @click="activeNav = 4"
        >
          Blog
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      activeNav: 1,
      isScrolling: false
    }
  },
  mounted() {
    this.isScrolling = window.scrollY > 0
    window.onscroll = () => {
      this.isScrolling = window.scrollY > 0
    }
  }
}
</script>
