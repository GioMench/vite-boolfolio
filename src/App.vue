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
          <li class="page-item" v-show="projects.prev_page_url">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          <li class="page-item" :class="{ 'active': page == projects.current_page}"  aria-current="page" v-for="page in projects.last_page"><a class="page-link" href="#">{{ page }}</a></li>
          

          <li class="page-item" v-show="projects.prev_page_url">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </main>
  <footer>footer</footer>
</template>

<style></style>
