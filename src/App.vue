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
            active: false,
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
      }
    }
  }
}
</script>

<template>
  <div>
    <AppHeader :navig="navigation" />
    <AppMain />
    <AppFooter :socialArray="social" />
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
</style>
