<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container" >
      <router-link to="/">
        <a class="navbar-brand" style="text-decoration: none !important;">Start Bootstrap</a>
      </router-link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li> -->
          <li class="nav-item" @click="logout()">
            <a class="nav-link active" aria-current="page">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Page header with logo and tagline-->
  <header class="py-5 bg-light border-bottom mb-4">
    <div class="container">
      <div class="text-center my-5">
        <h1 class="fw-bolder">Welcome to Blog Home!</h1>
        <p class="lead mb-0">
          A Bootstrap 5 starter layout for your next blog homepage
        </p>
        <button class="btn btn-warning" style="display: inline-block" @click="openModal(1)">
          Start your blog
        </button>
      </div>
    </div>
  </header>
  <ModalBlog :ModalType="this.typeOpen" :isOpen="isOpen" :data="this.dataFake" @close-modal="closeModal()"
    @fetch-data="getAll(this.pageNumber)" :blogTypes="this.blogTypes" v-if="isOpen == true" />
  <!-- Page content-->
  <div class="container form-control">
    <div class="row">
      <!-- Blog entries-->
      <div class="col-lg-8">
        <!-- Featured blog post-->
        <div class="card mb-4">
          <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
          <div class="card-body">
            <div class="small text-muted">January 1, 2023</div>
            <h2 class="card-title">Featured Post Title</h2>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
              laboriosam. Dicta expedita corporis animi vero voluptate
              voluptatibus possimus, veniam magni quis!
            </p>
            <a class="btn btn-primary" href="#!">Read more →</a>
          </div>
        </div>
        <!-- Nested row for non-featured blog posts-->
        <div class="row">
          <div class="col-lg-6" v-for="blog in data.Data" :key="blog.id" style="height: 600px;">
            <div class="card mb-4">
              <img class="card-img-top"
                :src="blog.img ? blog.img : 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'"
                style="max-width: 100%; height: 280px" alt="..." />
              <div class="card-body">
                <div class="small text-muted">{{ blog.createAt }}</div>
                <h2 class="card-title h4">{{ blog.title }}</h2>
                <!-- <p class="card-text">{{ blog.content }}</p> -->
                <p class="card-text">{{ blog.type }}</p>
                <p class="card-text">
                  created by username {{ blog.createdByUsername }}
                </p>
                <a class="btn btn-primary" @click="OpenUpdateModal(blog)"> Post details</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Pagination-->
        <nav aria-label="Pagination">
          <hr class="my-0" />
          <ul class="pagination justify-content-center my-4">
            <li v-if="this.data.TotalPage > 3 && this.pageNumber != 0" class="page-item" @click="getAll(0)">
              <a class="page-link" tabindex="-1" aria-disabled="true">Newest</a>
            </li>
            <li v-if="this.pageNumber - 2 >= 0" @click="getAll(this.pageNumber - 2)" class="page-item"><a
                class="page-link">{{ this.pageNumber - 1 }}</a></li>
            <li class="page-item active" aria-current="page"></li>
            <li v-if="this.pageNumber - 1 >= 0" @click="getAll(this.pageNumber - 1)" class="page-item"><a
                class="page-link">{{ this.pageNumber }}</a></li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" @click="getAll(this.pageNumber)">{{
                this.pageNumber + 1 }}</a>
            </li>
            <li v-if="this.pageNumber + 1 < this.data.TotalPage"
              @click="this.isFilter ? filter(this.pageNumber + 1) : getAll(this.pageNumber + 1)" class="page-item">
              <a class="page-link">{{ this.pageNumber + 2 }}</a>
            </li>
            <li v-if="this.pageNumber + 2 < this.data.TotalPage" @click="getAll(this.pageNumber + 2)" class="page-item">
              <a class="page-link">{{ this.pageNumber + 3 }}</a>
            </li>
            <li v-if="this.data.TotalPage > 3 && this.pageNumber != this.data.TotalPage - 1"
              @click="getAll(this.data.TotalPage - 1)" class="page-item"><a class="page-link">Oldest</a></li>
          </ul>
        </nav>
      </div>
      <!-- Side widgets-->
      <div class="col-lg-4">
        <!-- Search widget-->
        <div class="card mb-4">
          <div class="card-header">Search</div>
          <div class="card-body">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Enter search term..."
                aria-label="Enter search term..." aria-describedby="button-search" />
              <button class="btn btn-primary" id="button-search" type="button">
                Go!
              </button>
            </div>
          </div>
        </div>
        <!-- Categories widget-->
        <div class="card mb-4">
          <div class="card-header">Categories</div>
          <select v-model="this.filterForm.type">
            <option value="" selected style="text-align: center !important">select your blog type</option>
            <option v-for="blogType in blogTypes" :key="blogType" :value="blogType"> {{ blogType }}</option>
          </select>
        </div>
        <!-- Side widget-->
        <div class="card mb-4">
          <div class="card-header">Side Widget</div>
          <div class="card-body">
            You can put anything you want inside of these side widgets. They are
            easy to use, and feature the Bootstrap 5 card component!
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer-->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">
        Copyright &copy; Your Website 2024
      </p>
    </div>
  </footer>
</template>

<script>
import BlogService from "@/service/BlogService";
import ModalBlog from "./ModalBlog.vue";

export default {
  components: { ModalBlog },
  name: "Home-page",
  data() {
    return {
      filterForm: {
        type: "",
        title: "",
        pageNo: 0,
      },
      isOpen: false,
      typeOpen: "update",
      dataFake: {
        id: 0,
        title: "",
        content: "",
        blogType: "",
        createdByUsername: ""
      },
      pageNumber: 0,
      data: {
        Data: [],
        pageNo: this.pageNumber,
        PageSize: 0,
        TotalItems: 0,
        TotalPage: 0,
      },
      blogTypes: [
        "ROMANTIC",
        "TECHNOLOGY",
        "HISTORY",
        "CAREER_PATH",
        "BINANCE",
        "LEARN",
        "DEFAULT"
      ],
    };
  },
  methods: {
    getAll(number) {
      if (number > this.pageNumber) {
        this.pageNumber = number;
      }
      if (number < this.pageNumber) {
        this.pageNumber = number;
      }
      if (!localStorage.getItem("username") && !localStorage.getItem("token")) {
        this.$router.push("/login");
      }
      BlogService.getAll(this.pageNumber)
        .then((response) => {
          this.data = response.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/login");
        });
    },
    openModal(number) {
      const token = localStorage.getItem("token");
      if (token == null || !localStorage.getItem("username") ) this.$router.push("/login");
      if (number == 1) {
        this.typeOpen = "create";
        this.dataFake = { id: 0, title: "", content: "", blogType: "", createdByUsername: "" };
      } else {
        this.typeOpen = "update";
      }
      this.isOpen = true;
    },

    OpenUpdateModal(data) {
      this.dataFake = data;
      console.log(data.id);
      // eslint-disable-next-line no-debugger
      debugger
      if(data.createdByUsername != localStorage.getItem('username')){
        BlogService.updateViews(data.id)
        .then(response => {
          console.log(response)
        })
        .catch(
          err =>console.log(err)
        );
      } 
      this.openModal(2);

    },

    closeModal() {
      this.isOpen = false;
    },

    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("username");
      this.$router.push('/login');
    },
  },
  mounted() {
    this.getAll();
   
  },
};
</script>
<style>
@import url("/src/assets/style.css");
</style>
