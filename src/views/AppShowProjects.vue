<script>
import axios from 'axios';

export default {
    name: 'AppShowProjects',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000/',
            base_projects_url: 'api/projects',
            project: null,
            loading: true
        }
    },
    mounted() {
        console.log(this.$route.params.slug, this.base_api_url, this.base_projects_url)
        const url = this.base_api_url + this.base_projects_url + `/${this.$route.params.slug}`
        console.log(url);

        axios.get(url)
            .then(response => {
                console.log(response)
                if (response.data.response) {
                    //console.log(response.data.response)
                    this.project = response.data.response
                    this.loading = false
                    //console.log(this.project)
                } else {
                    this.$router.push({ name: 'not-found' })
                }

            }).catch(err => {
                console.error(err)
            })



    }
}
</script>

<template>

    <template v-if="project">

        <div class="card">

            <div class="col-4">
                <img :src="base_api_url + 'storage/' + project.preview_image" alt="">

                <div class="card-body">
                    <h3>{{ project.project_name }}</h3>
                </div>
            </div>



        </div>
    </template>

</template>

<style></style>