<template>
  <div id="pageWrapper">
    <div class="container vh-100">
      <div class="grid">
        <div></div>
        <div class="w-100">
          <div class="about">
            <div class="hinomaru"></div>
            <div class="this-fs-title">ABOUT</div>
            <div class="fs-2rem">日本の水っておいしいの？</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="container">
      <div class="container">
        <div class="row" style="height: 530px">
          <div class="col-sm-6">
            <img class="this-img" src="./images/top.jpg" />
          </div>
          <div class="col-sm-6">
            <div class="grid">
              <div></div>
              <div>description</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6"></div>
          <div class="col-sm-6">image</div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6">image</div>
          <div class="col-sm-6">description</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hinomaru {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgb(160 34 64 / 100%);
  margin: 0 auto;
}

.about {
  font-family: var(--my-fontfamily);
  text-align: center;
  & div {
    margin-bottom: 10px;
  }
  & .this-fs-title {
    font-size: 3rem;
    letter-spacing: 30px;
    transform: translateX(10px);
  }
}
</style>

<script>
module.exports = {
  data() {
    return {};
  },
};
</script>
