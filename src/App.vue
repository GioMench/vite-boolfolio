<script>

import AppHeader from './components/AppHeader.vue';



export default {
  name: 'App',
  components: {
    AppHeader
  }
}


</script>

<template>

  <div class="d-flex">
    <AppHeader class="col"></AppHeader>


    <main class="col">
      <RouterView />

    </main>
  </div>
</template>

<style></style>
