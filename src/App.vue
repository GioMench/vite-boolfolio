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

  <div class="container-fluid">
    <div class="row gap-5">
      <AppHeader class="col-3 "></AppHeader>


      <main class="col">
        <RouterView />

      </main>
    </div>
  </div>
</template>

<style></style>
