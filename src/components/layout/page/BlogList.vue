<template>
  <modal-blog/>

  <blog-header msg= "ready to open your mine" title="Welcome back your home blog" ></blog-header>
  <!-- Page content-->
  <div class="container">
    <div class="row">
      <!-- Blog entries-->
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-12">
            <!-- Blog post-->
            <div class="card mb-4">
              <a href="#!"
                ><img
                  class="card-img-top"
                  src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                  alt="..."
              /></a>
              <div class="card-body">
                <div class="small text-muted">January 1, 2023</div>
                <h2 class="card-title h4">Post Title</h2>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla.
                </p>
                <a class="btn btn-primary" href="#!">Read more →</a>
              </div>
            </div>
            <!-- Blog post-->
            <div class="card mb-4">
              <a href="#!"
                ><img
                  class="card-img-top"
                  src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                  alt="..."
              /></a>
              <div class="card-body">
                <div class="small text-muted">January 1, 2023</div>
                <h2 class="card-title h4">Post Title</h2>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla.
                </p>
                <a class="btn btn-primary" href="#!">Read more →</a>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <!-- Blog post-->
            <div class="card mb-4">
              <a href="#!"
                ><img
                  class="card-img-top"
                  src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                  alt="..."
              /></a>
              <div class="card-body">
                <div class="small text-muted">January 1, 2023</div>
                <h2 class="card-title h4">Post Title</h2>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla.
                </p>
                <a class="btn btn-primary" href="#!">Read mBlogHeaderore →</a>
              </div>
            </div>
            <!-- Blog post-->
            <div class="card mb-4">
              <a href="#!"
                ><img
                  class="card-img-top"
                  src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                  alt="..."
              /></a>
              <div class="card-body">
                <div class="small text-muted">January 1, 2023</div>
                <h2 class="card-title h4">Post Title</h2>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                  laboriosam.
                </p>
                <a class="btn btn-primary" href="#!">Read more →</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Pagination-->
        <nav aria-label="Pagination">
          <hr class="my-0" />
          <ul class="pagination justify-content-center my-4">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
                >Newer</a
              >
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#!">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#!">2</a></li>
            <li class="page-item"><a class="page-link" href="#!">3</a></li>
            <li class="page-item disabled">
              <a class="page-link" href="#!">...</a>
            </li>
            <li class="page-item"><a class="page-link" href="#!">15</a></li>
            <li class="page-item"><a class="page-link" href="#!">Older</a></li>
          </ul>
        </nav>
      </div>
      <!-- Side widgets-->
      <div class="col-lg-4">
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
      </div>
    </div>
  </div>
</template>
<script>
// import ModalBlog from '../ModalBlog.vue';
import BlogHeader from './BlogHeader.vue';

export default {
  name: "blog-list",
  components: {
    BlogHeader
  },
  data() {
    return {
      blogs: [],
      dataFake: {
        id: 0,
        title: "",
        content: "",
        blogType: "",
      },
    };
  },
};
</script>
