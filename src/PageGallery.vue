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
            <div class="this-title fs-3rem mb-4"></div>
            <div class="this-description"></div>
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
          title: '元滝伏流水',
          description:
            '木々に囲まれた岩肌一帯から湧き出る伏流水の水量が豊富で見ごたえある。コケ岩と水しぶきが織り成す美しい風景は、写真愛好家にも人気である。平成の名水百選に認定された。',
          imgPath: './images/gallery/元滝伏流水.jpg',
        },
        {
          title: '沼袋の水',
          description:
            '平成の名水百選に選ばれた青森県の水です。元々、青森県は水の綺麗な地域ですが、その中でも名水と呼ばれる沼袋の水が評価されました。十和田市と地元団体が管理する名水公園の中にあります。',
          imgPath: './images/gallery/沼袋の水.jpg',
        },
        {
          title: '羊蹄のふきだし湧水',
          description:
            '北海道の京極町の水です。羊蹄は「ぎしぎし」と読みます。羊蹄山に溶け込んだ水が絶え間なく湧き出ます。地域では名水の郷として多くの人に親しまれています。',
          imgPath: './images/gallery/羊蹄のふきだし湧水.jpg',
        },
        {
          title: '不動滝の霊水',
          description:
            '平成の名水百選に選ばれた富山県の霊水です。霊水とは、飲むと病気が直ると言われる不思議な働きがある水のことです。古くから、日照りによる水不足を救った霊水として大切にされてきました。今も四季を通じ冷たく澄んだ岩清水が湧き出しています。',
          imgPath: './images/gallery/不動滝の霊水.jpg',
        },
        {
          title: '栂峰渓流水',
          description:
            '栂峰（つがみね）渓流水は福島県 喜多方市の渓流水です。平成の名水百選に選ばれました。喜多方ラーメンや喜多方の醤油にはこの水が使われています。',
          imgPath: './images/gallery/栂峰渓流水.jpg',
        },
      ],
    };
  },
  mounted() {
    this.next();
  },
  methods: {
    setGallery() {
      let tl = gsap.timeline();
      tl.to('#galleryImage', {
        x: '-100%',
        opacity: 0,
        onComplete: () => {
          document
            .querySelector('#galleryImage img')
            .setAttribute('src', this.data[this.currentPage].imgPath);
        },
      });
      tl.to('#galleryImage', {
        x: 0,
        opacity: 1,
        ease: 'power1.out',
      });
    },

    setDescription() {
      let tl = gsap.timeline();
      tl.to('#galleryContents', {
        x: '100%',
        opacity: 0,
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
        opacity: 1,
        ease: 'power1.out',
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
