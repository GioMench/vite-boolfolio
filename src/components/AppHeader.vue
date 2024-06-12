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

      <img src="/public/logo-ok.svg" alt="my logo with name" width="450px">
      <div class="navbar">
        <router-link :to="{ name: item.route }" v-for="item in menu" class="menu_link px-3">{{ item.text
          }}</router-link>
      </div>
    </div>

  </div>





</template>

<style scoped></style>
