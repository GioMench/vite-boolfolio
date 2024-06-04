<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menu: [
        {
          'text': 'Home',
          'route': 'home'
        },
        {
          'text': 'Projects',
          'route': 'projects'
        },
        {
          'text': 'Contacts',
          'route': 'contacts'
        },
        {
          'text': 'About',
          'route': 'about'
        }


      ]
    }
  }
}
</script>

<template>
  <header>
    <nav class="main_menu">
      <div class="container">

        <div class="logo">logo</div>

        <div class="right-menu">
          <router-link :to="{ name: item.route }" v-for="item in menu">{{item.text}}</router-link>
          
        </div>

      </div>

    </nav>
  </header>
</template>

  <style scoped>

  </style>
