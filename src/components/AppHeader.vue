<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menu: [
        {
          'text': 'Welcome',
          'route': 'welcome'
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
          'text': 'About Me',
          'route': 'about'
        }


      ]
    }
  }
}
</script>


<template>


  <div class="right_container py-5 align-item-center">

    <img src="/public/logo-ok.svg" class="logo_navbar m-auto img-fluid" alt="my logo with name">
    <div class="navbar py-5 flex-column">
      <router-link :to="{ name: item.route }" v-for="item in menu" class="menu_link px-2 py-3 text-uppercase fw-light"
        style="font-size: 10px;">{{ item.text
        }}</router-link>
    </div>
  </div>

</template>

<style scoped>
.right_container {
  height: 100vh;

  .logo_navbar {
    display: block;
    max-width: 250px;

  }

  .menu_link {
    text-decoration: none;
    color: white;
    transition: 0.3s;

    &:hover {
      text-shadow: 0 0 3px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 9px #fff, 0 0 11px #fff, 0 0 13px #fff, 0 0 15px #fff;
    }
  }
}
</style>
