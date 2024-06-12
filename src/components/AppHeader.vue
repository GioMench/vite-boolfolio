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


  <div class="p-5" style="height: 100vh; margin: auto;">

    <div class="container-fluid ">

      <img src="/public/logo-ok.svg" alt="my logo with name" style="display: block; max-width:600px;margin: auto;">
      <div class="navbar py-5 " style="max-width: 500px; margin: auto;">
        <router-link :to="{ name: item.route }" v-for="item in menu" class="menu_link px-2 py-3 text-uppercase fw-light" style="font-size: 10px;">{{ item.text
          }}</router-link>
      </div>
    </div>

  </div>





</template>

<style scoped></style>
