const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: httpVueLoader('./src/PageHome.vue'),
    },
    {
      path: '/about',
      name: 'PageAbout',
      component: httpVueLoader('./src/PageAbout.vue'),
    },
    {
      path: '/gallery',
      name: 'PageGallery',
      component: httpVueLoader('./src/PageGallery.vue'),
    },
  ],
});

const app = new Vue({
  el: '#app',
  components: {
    'app-vue': httpVueLoader('./src/App.vue'),
  },
  router,
});

/* Animation of screen transitions */
router.beforeEach((to, from, next) => {
  const tl = gsap.timeline();
  tl.to('.router-wrapper', {
    duration: 0.5,
    opacity: 0,
    onComplete: () => {
      next();
    },
  }).to('.router-wrapper', {
    duration: 0.5,
    opacity: 1,
  });
});
