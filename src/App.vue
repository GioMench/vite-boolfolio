<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      base_api_url: 'http://127.0.0.1:8000/',
      base_projects_url: 'api/projects',
      projects: [],
      loading: true
    }

  },
  methods: {

    nextPage(url){
      console.log(url);
      this.callApi(url)
    },

    prevPage(url){
      console.log(url);
      this.callApi(url)
    },

    callApi(url) {
      axios
        .get(url)
        .then(response => {
          //console.log(response);
          this.projects = response.data.projects
          this.loading = false
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  mounted() {
    let url = this.base_api_url + this.base_projects_url
    this.callApi(url);
  }
}
</script>

<template>

  <header>header</header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col" v-for="project in projects.data">
          <div class="card">

            <img :src="base_api_url + 'storage/' + project.preview_image" alt="">

            <div class="card-body">
              <h3>{{ project.project_name }}</h3>


            </div>
          </div>



        </div>
      </div>

      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li class="page-item" v-show="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
            <button class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          <li class="page-item" :class="{ 'active': page == projects.current_page}" v-for="page in projects.last_page"><a class="page-link" href="#">{{ page }}</a></li>
          

          <li class="page-item" v-show="projects.next_page_url" @click="nextPage(projects.next_page_url)">
            <button class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </main>
  <footer>footer</footer>
</template>

<style></style>
