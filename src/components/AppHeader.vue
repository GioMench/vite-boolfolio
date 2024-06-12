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
    <nav class="navbar">
      <div class="container d-flex justify-content-between">

        <div class="logo">
          <img src="/public/gmlogo.svg" alt="g/m personal logo" width="80px">
        </div>

        <div class="right-menu ">

          <router-link :to="{ name: item.route }" v-for="item in menu" class="menu_link px-3">{{ item.text
            }}</router-link>

        </div>

      </div>

    </nav>
  </header>
</template>

<style scoped></style>
