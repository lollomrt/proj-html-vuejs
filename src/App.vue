<script>
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      navigation: {
        left_navigation: [
          {
            titolo: 'Home',
            url: '#',
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
            submenu: [
              'event list',
              'event single',
            ]
          },
          {
            titolo: 'blog',
            url: '#',
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
  </div>
</template>

<style lang="">

</style>
