<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      social: [
        {
          icon: 'fa-brands fa-twitter',
          url: '#',
          title: 'Twitter'
        },
        {
          icon: 'fa-brands fa-facebook-f',
          url: '#',
          title: 'Facebook'
        },
        {
          icon: 'fa-brands fa-instagram',
          url: '#',
          title: 'Instagram'
        },
        {
          icon: 'fa-brands fa-linkedin-in',
          url: '#',
          title: 'Linkedin'
        }
      ],
      navigation: {
        left_navigation: [
          {
            titolo: 'Home',
            url: '#',
            active: true,
            submenu: [
              'Main Home',
              'Italian Restaurant',
              'Pizzeria Home',
              'Pizza light',
              'Pizza dark',
              'Fast Food home',
            ]
          },
          {
            titolo: 'Pages',
            url: '#',
            active: false,
            submenu: [
              'about us',
              'our services',
              'our team',
              'our history',
              'reservation',
              'book a table I',
              'book a table II',
              'contact us',
              'get in touch',
              'coming soon',
              '404 error page',
            ]
          },
          {
            titolo: 'Menu',
            url: '#',
            active: false,
            submenu: [
              'list type',
              'list layouts',
              'product types',
              'shop pages',
            ]
          }
        ],

        right_navigation: [
          {
            titolo: 'Event',
            url: '#',
            active: false,
            submenu: [
              'event list',
              'event single',
            ]
          },
          {
            titolo: 'blog',
            url: '#',
            active: false,
            submenu: [
              'right sidebar',
              'left sidebar',
              'without sidebar',
              'posts type',
            ]
          },
          {
            titolo: 'landing',
            url: '#',
            active: false,
            submenu: null
          }
        ]
      },
      autoscroll: null,
      pizzaJumbotron: [
        {
          img1: 'src/assets/img/h3-rev-img-1.png',
          img2: 'src/assets/img/h3-rev-img-2.png'
        },
        {
          img1: 'src/assets/img/h3-rev-img-3.png',
          img2: 'src/assets/img/h3-rev-img-4.png'
        },
        {
          img1: 'src/assets/img/h3-rev-img-5.png',
          img2: 'src/assets/img/h3-rev-img-6.png'
        },
      ],
      cardSection1: [
        'src/assets/img/h3-img-1.jpg',
        'src/assets/img/h3-img-2.jpg',
        'src/assets/img/h3-img-3.jpg',
        'src/assets/img/h3-img-4.jpg',
      ],
      reviews: [
        {
          titolo: '“Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”',
          fromUser: 'Waschington Post 2018'
        },
        {
          titolo: '“Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry”',
          fromUser: 'Waschington Post 2019'
        },
        {
          titolo: '“It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.”',
          fromUser: 'Waschington Post 2020'
        }
      ]
    }
  },
  methods: {
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <AppHeader :navig="navigation" />
    <AppMain :pizzas="this.pizzaJumbotron" :cs1="cardSection1" :reviewsCarousel="reviews" />
    <AppFooter :socialArray="social" />
    <div class="to-top-btn" @click="toTop">
      <img src="/public/svg/svg-4.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;

.wrapper {
  position: relative;

  .to-top-btn {
    position: fixed;
    width: 50px;
    height: 50px;
    background-color: #f6f7f2;
    cursor: pointer;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 2rem;
    right: 2rem;
  }
}
</style>
