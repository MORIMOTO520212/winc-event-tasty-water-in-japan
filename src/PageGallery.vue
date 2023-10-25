<template>
  <div id="pageWrapper">
    <div class="gallery row vh-100">
      <div class="col-sm">
        <div class="grid">
          <div></div>
          <div id="galleryImage">
            <img class="this-img" src="./images/top.jpg" />
          </div>
          <div></div>
        </div>
      </div>
      <div class="col-sm position-absolute bottom-0 right-0 position-md-static">
        <div class="grid contents-body">
          <div></div>
          <div id="galleryContents" class="this-contents ms-auto ms-md-0">
            <div class="this-title fs-3rem mb-4">元滝伏流水</div>
            <div class="this-description">
              　木々に囲まれた岩肌一帯から湧き出る伏流水の水量が豊富で見ごたえある。コケ岩と水しぶきが織り成す美しい風景は、写真愛好家にも人気である。平成の名水百選に認定された。
            </div>
            <div class="this-pagination d-flex">
              <img
                id="prev"
                class="p-3"
                src="./images/prev-button.svg"
                v-on:click="prev()"
              />
              <img
                id="next"
                class="p-3"
                src="./images/next-button.svg"
                v-on:click="next()"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  font-family: var(--my-fontfamily);

  & .this-img {
    width: 95%;
    height: 75vh;
    object-fit: cover;
    border-radius: 0 20px 20px 0;
  }

  & .this-contents {
    width: 80%;
    border-radius: 20px;
    background: #e7e7e0;
    padding: 15px;

    & .this-description {
      height: 200px;
    }
    & .this-pagination img {
      width: 9rem;
      height: auto;
      cursor: pointer;
    }
  }

  & .contents-body {
    width: 100%;
    max-width: 400px;
    float: right;
  }
}
</style>

<script>
module.exports = {
  data: () => {
    return {
      currentPage: 0,
      data: [
        {
          title: '沼袋の水',
          description: '説明',
          imgPath: './images/gallery/沼袋の水.jpg',
        },
        {
          title: '羊蹄のふきだし湧水',
          description: '説明',
          imgPath: './images/gallery/羊蹄のふきだし湧水.jpg',
        },
      ],
    };
  },
  mounted: () => {},
  methods: {
    setGallery() {
      let tl = gsap.timeline();
      tl.to('#galleryImage', {
        x: '-100%',
        onComplete: () => {
          document
            .querySelector('#galleryImage img')
            .setAttribute('src', this.data[this.currentPage].imgPath);
        },
      });
      tl.to('#galleryImage', {
        x: 0,
      });
    },

    setDescription() {
      let tl = gsap.timeline();
      tl.to('#galleryContents', {
        x: '100%',
        onComplete: () => {
          let title = document.querySelector('#galleryContents .this-title');
          let description = document.querySelector(
            '#galleryContents .this-description'
          );
          title.innerText = this.data[this.currentPage].title;
          description.innerText = this.data[this.currentPage].description;
        },
      });
      tl.to('#galleryContents', {
        x: 0,
      });
    },

    next() {
      if (this.currentPage < this.data.length - 1) {
        this.currentPage += 1;
      } else {
        this.currentPage = 0;
      }
      this.setGallery();
      this.setDescription();
    },

    prev() {
      if (0 < this.currentPage) {
        this.currentPage -= 1;
      } else {
        this.currentPage = this.data.length - 1;
      }
      this.setGallery();
      this.setDescription();
    },
  },
};
</script>
