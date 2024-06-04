<script>

export default {
  name: 'App',
}


</script>

<template>

  <header>
    <nav class="main_menu">
      <div class="container">

        <div class="logo">logo</div>

        <div class="right-menu">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'about' }">About</router-link>
          <router-link :to="{ name: 'projects' }">Projects</router-link>
          <router-link :to="{ name: 'contacts' }">Contacts</router-link>
        </div>

      </div>

    </nav>
  </header>


  <main>
    <RouterView />

  </main>
  
</template>

<style></style>
