<script>
import axios from 'axios';

export default {
    name: 'AppShowProjects',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000/',
            bae_projects_url: 'api/projects',
            project: null,
            loading: true
        }
    },
    mounted(){
        console.log(this.$route.params.slug, this.base_api_url, this.base_projects_url)
        
    }
}
</script>

<template>
  project
</template>

<style></style>