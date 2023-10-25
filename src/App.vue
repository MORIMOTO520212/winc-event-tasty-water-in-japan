<template>
  <div>
    <div class="router-wrapper">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <span
            class="navbar-brand mb-0"
            v-on:click="router.push('/')"
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
    <div id="loadingWrapper" class="loading-wrapper">
      <div
        id="loadingText"
        class="container d-flex justify-content-center text-start"
      >
        <div id="tasty" class="title">Tasty</div>
        <div id="water" class="title">Water</div>
        <div id="in" class="title">in</div>
        <div id="japan" class="title">Japan</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  font-size: 3rem;
  font-family: 'Merriweather', serif;
  letter-spacing: 10px;
  background: rgb(231 231 224 / 100%);
  z-index: 2000;
  & .title {
    padding: 0 20px;
  }
}
.navbar {
  font-family: 'Merriweather', serif;
  letter-spacing: 10px;
  padding: 8px 30px;
  z-index: 1000;
}

.navbar-nav {
  letter-spacing: 5px;
}

.navbar-nav div {
  color: #fff;
  border: solid 1px #fff;
  border-radius: 50px;
  padding: 5px 15px;
  margin: 0 10px;
  cursor: pointer;
  background: linear-gradient(0deg, rgb(0 0 0 / 100%) 0%, rgb(0 0 0 / 0%) 0%);
}

.navbar-nav div:hover {
  color: #fff !important;
}

.navbar-brand {
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}
</style>

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
  mounted() {
    gsap.registerPlugin(SplitText);
    [t, w, i, j] = document.querySelectorAll('.loading-wrapper .title');

    // initialize

    // split text
    var splitTasty = new SplitText('#tasty', { type: 'chars' });
    var splitWater = new SplitText('#water', { type: 'chars' });
    var splitIn = new SplitText('#in', { type: 'chars' });
    var splitJapan = new SplitText('#japan', { type: 'chars' });
    // opacity
    gsap.set(splitTasty.chars.slice(1), { opacity: 0 });
    gsap.set(splitWater.chars.slice(1), { opacity: 0 });
    gsap.set(splitIn.chars, { opacity: 0 });
    gsap.set(splitJapan.chars.slice(1), { opacity: 0 });
    // position
    gsap.set(t, { x: 220 });
    gsap.set(w, { x: 130 });
    gsap.set(j, { x: -170 });
    gsap.set('#loadingWrapper', { height: '100vh' });

    const tl1 = () => {
      let tl = gsap.timeline();
      tl.to('#loadingText', { y: '49vh' }, '<');
      tl.to([t, w, j], { x: 0, ease: 'power2.out' });
      tl.to(splitTasty.chars.slice(1), { opacity: 1, stagger: 0.1 });
      tl.to(splitWater.chars.slice(1), { opacity: 1, stagger: 0.1 }, '<');
      tl.to(splitJapan.chars.slice(1), { opacity: 1, stagger: 0.1 }, '<');
      tl.to(splitIn.chars, { opacity: 1 });
      tl.to('#loadingText', { y: '-50vh' });
      tl.to('#loadingWrapper', { height: '0px' }, '<');
    };

    window.onload = () => {
      tl1();
    };
  },
};
</script>
