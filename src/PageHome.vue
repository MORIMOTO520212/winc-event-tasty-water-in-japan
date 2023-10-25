<template>
  <div
    id="pageWrapper"
    class="bg-body-secondary vh-100"
    style="background-image: url('./images/top.jpg')"
  >
    <div class="grid mx-5">
      <div></div>
      <div class="catchphrase">
        <p>自然の贈り物、名水百選</p>
        <p>一滴が物語る美</p>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
#pageWrapper {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#pageWrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(68, 68, 68, 40%);
}

.catchphrase {
  font-family: var(--my-fontfamily);
  color: #fff;
  font-size: 3.5rem;
  z-index: 1;
}
</style>

<script>
module.exports = {
  data() {
    return {};
  },
  mounted() {
    gsap.set('.catchphrase', { opacity: 0 });
    gsap.to('.catchphrase', { opacity: 1, duration: 2 });
  },
};
</script>
