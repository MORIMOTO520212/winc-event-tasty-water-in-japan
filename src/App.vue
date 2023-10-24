<template>
  <div>
    <div class="router-wrapper">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <span
            class="navbar-brand mb-0"
            v-bind:style="location.hash === '#/' ? 'color:#fff' : 'color:#000'"
            >TWJ</span
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div class="navbar-nav">
              <div
                v-on:click="router.push('about')"
                v-on:mouseover="navBtnOver($event)"
                v-on:mouseout="navBtnOut($event)"
                v-bind:style="
                  location.hash === '#/'
                    ? 'color:#fff; border-color: #fff;'
                    : 'color:#000; border-color: #000;'
                "
              >
                About
              </div>
              <div
                v-on:click="router.push('gallery')"
                v-on:mouseover="navBtnOver($event)"
                v-on:mouseout="navBtnOut($event)"
                v-bind:style="
                  location.hash === '#/'
                    ? 'color:#fff; border-color: #fff;'
                    : 'color:#000; border-color: #000;'
                "
              >
                Gallery
              </div>
            </div>
          </div>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  methods: {
    navBtnOver: (e) => {
      gsap.to(e.target, {
        background:
          'linear-gradient(0deg, rgb(0 0 0 / 100%) 100%, rgb(0 0 0 / 0%) 0%)',
      });
    },
    navBtnOut: (e) => {
      gsap.to(e.target, {
        background:
          'linear-gradient(0deg, rgb(0 0 0 / 100%) 0%, rgb(0 0 0 / 0%) 0%)',
      });
    },
  },
};
</script>
