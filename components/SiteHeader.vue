<template>
  <div class="site-header">
    <nav>
      <a
        class="nav-item"
        href="#"
        :class="{active: activeNav == 1}"
        @click="activeNav = 1"
      >
          Home
        </a>
      <a
        class="nav-item"
        href="#"
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
        href="#"
        :class="{active: activeNav == 3}"
        @click="activeNav = 3"
      >
        Feedbacks
      </a>
      <a
        class="nav-item"
        href="#"
        :class="{active: activeNav == 4}"
        @click="activeNav = 4"
      >
        Blog
      </a>
    </nav>
  </div>

</template>

<script>
    export default {
        name: 'SiteHeader',
        data() {
            return {
                activeNav: 1
            }
        }
    }
</script>
