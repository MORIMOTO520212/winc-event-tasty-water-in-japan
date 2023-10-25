<template>
  <div id="pageWrapper">
    <div class="container vh-100">
      <div class="grid">
        <div></div>
        <div class="w-100">
          <div class="about">
            <div class="hinomaru"></div>
            <div class="this-fs-title" style="opacity: 0">ABOUT</div>
            <div class="this-subtitle fs-2rem" style="opacity: 0">
              日本の水っておいしいの？
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="container about-contents">
      <!-- content 1 -->
      <div class="container">
        <div class="row" style="height: 530px">
          <div class="col-sm-6">
            <img id="contentImage1" class="this-img" src="./images/top.jpg" />
          </div>
          <div class="col-sm-6">
            <div class="grid" style="max-width: 370px; margin: 0 auto">
              <div></div>
              <div>
                <div id="contentTitle1" class="this-content-title mb-3">
                  名水百選
                </div>
                <div id="contentDescription1">
                  　名水百選とは、1985年3月に環境庁が選定した全国各地の「名水」とされる100か所の湧水・河川・地下水である。
                  名水百選における「名水」とは、「保全状況が良好」で「地域住民等による保全活動がある」ということであり、「そのまま飲める美味しい水」という意味ではない。飲用には煮沸が必要とされているものもある。
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <!-- content 2 -->
      <div class="container">
        <div class="row" style="height: 330px">
          <div class="col-sm-6 d-none d-sm-block"></div>
          <div class="col-sm-6">
            <div class="row h-100">
              <div class="col-sm-4 d-none d-sm-block"></div>
              <div class="col-sm-8">
                <img
                  id="contentImage2"
                  class="this-img"
                  src="./images/top.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content 3 -->
      <div class="container">
        <div class="row" style="height: 530px">
          <div class="col-sm-6">
            <div class="grid" style="max-width: 370px; margin: 0 auto">
              <div></div>
              <div>
                <div id="contentTitle2" class="this-content-title mb-3">
                  水と和食
                </div>
                <div id="contentDescription2">
                  　実は、日本の水と和食には、料理の質、味わい、バランスにおいて密接な関わり合いがあるのです。美味しい和食を楽しむためには質の高い水が欠かせない要素となっているのです。
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div class="col-sm-6 order-sm-first">
            <img id="contentImage3" class="this-img" src="./images/top.jpg" />
          </div>
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

.about-contents {
  font-family: var(--my-fontfamily);

  & .container {
    margin-bottom: 8%;
  }

  & .this-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .this-content-title {
    font-size: 3rem;
    letter-spacing: calc(3rem * 0.05);
  }
}
</style>

<script>
module.exports = {
  data: () => {
    return {};
  },
  mounted: () => {
    // hinomaru gradient animation
    gsap.set('.hinomaru', {
      background: 'linear-gradient(0deg, #c92c38, #d38201 20%)',
    });
    const tl = gsap.timeline({
      defaults: { ease: 'power0', duration: 3 },
      repeat: -1,
    });
    tl.to('.hinomaru', {
      background: 'linear-gradient(50deg, #c92c38, #d38201 50%)',
    });
    tl.to('.hinomaru', {
      background: 'linear-gradient(0deg, #c92c38, #d38201 50%)',
    });
    tl.to('.hinomaru', {
      background: 'linear-gradient(-50deg, #c92c38, #d38201 20%)',
    });
    tl.to('.hinomaru', {
      background: 'linear-gradient(0deg, #c92c38, #d38201 20%)',
    });

    // title animation
    const fsTitle = document.querySelector('.about .this-fs-title');
    const subtitle = document.querySelector('.about .this-subtitle');

    gsap.set([fsTitle, subtitle], { y: 50 });

    gsap.to([fsTitle, subtitle], { y: 0, stagger: 0.2 });
    gsap.to([fsTitle, subtitle], {
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    });

    // description animation
    const descriptionAnimation = (targetTitle, targetDescription) => {
      gsap.set([targetTitle, targetDescription], { y: 50, opacity: 0 });

      const scrollTrigger = (trigger) => {
        return {
          trigger: trigger,
          start: 'center bottom',
          markers: false,
        };
      };
      gsap.to([targetTitle, targetDescription], {
        y: 0,
        stagger: 0.2,
        scrollTrigger: scrollTrigger(targetTitle),
      });
      gsap.to([targetTitle, targetDescription], {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: scrollTrigger(targetTitle),
      });
    };

    descriptionAnimation('#contentTitle1', '#contentDescription1');
    descriptionAnimation('#contentTitle2', '#contentDescription2');

    // image animation
    const imageAnimation = (target) => {
      gsap.set(target, { opacity: 0 });
      gsap.to(target, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: target,
          start: 'center bottom',
          markers: false,
        },
      });
    };
    imageAnimation('#contentImage1');
    imageAnimation('#contentImage2');
    imageAnimation('#contentImage3');
  },
};
</script>
