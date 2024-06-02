<template>
  <div>
    <div class="modal-backdrop show"></div>
    <div
      class="modal show"
      id="myModal"
      tabindex="-1"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              v-if="this.ModalType === ''"
              class="modal-title"
              id="myModalLabel"
            >
              Modal create
            </h5>
            <h5
              v-if="this.ModalType === 'update'"
              class="modal-title"
              id="myModalLabel"
            >
              Modal update
            </h5>
            <h5
              v-if="this.ModalType === 'view'"
              class="modal-title"
              id="myModalLabel"
            >
              Modal view detail
            </h5>
          </div>
          <div class="modal-body">
            <form  v-on:submit="hanldeSubmit($event)">
              <div
                class="form-group"
                v-if="this.ModalType === 'update' || this.ModalType === 'view'"
              >
                <label for="recipient-name" class="col-form-label">Id:</label>
                <input
                  type="text"
                  class="form-control"
                  id="id"
                  v-model="blog.id"
                  readonly
                />
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label"
                  >Tille:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="blog.title"
                />
              </div>
              <div class="form-group">
                <label for="recipient-" class="col-form-label"
                  >Img:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="img"
                  v-model="blog.img"
                />
              </div>
              <div class="form-group">
                <label for="recipient-content" class="col-form-label"
                  >Content:</label
                >
                <textarea
                  class="form-control"
                  id="recipient-content"
                  rows="3"
                  v-model="blog.content"
                ></textarea>
                <!-- <input type="text" class="form-control" id="recipient-content" v-model="blog.content"> -->
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label"
                  >blogType:</label
                >
                <select name="" id="" v-model="blog.blogType">
                  <option value="" :selected="blog.blogType === ''">
                    -- Please Select --
                  </option>
                  <option
                    v-for="blogType in blogTypes"
                    :key="blogType"
                    :value="blogType"
                    :selected="blogType === blog.blogType"
                  >
                    {{ blogType }}
                  </option>
                </select>
              </div>
              <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              @click="closeModal()"
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BlogService from '@/service/BlogService';
export default {
  name: "modal-blog",
  props: {
    ModalType: String,
    isOpen: Boolean,
    data: {
      type: Object,
      default: () => ({ id: 0, title: "", content: "", blogType: "" }),
    },
    LocalPagePath: String,
  },
  data() {
    return {
      blog: {
        id: 0,
        title: "",
        content: "",
        img: "",
        blogType: "",
      },
      blogs: [],
      isCreate: true,
      blogTypes: [
        "ROMANTIC",
        "TECHNOLOGY",
        "HISTORY",
        "CAREER_PATH",
        "BINANCE",
        "LEARN",
      ],
    };
  },
  computed: {},
  methods: {
    createBlog(e) {
      e.preventDefault();
      const data = this.blog;
      BlogService.create(data)
        .then((response) => {
          console.log(response);
          this.$emit('fetch-data')
          this.closeModal(); 
          this.$router.push("/");
        })
        .catch((err) => {
          console.error(err);
          alert("create error");
        });
    },
    // ShowBlog(data) {
    //   this.isOpen = true;
    //   this.blog = data;
    // },
    updateBlog(event) {
      event.preventDefault();
      const data = this.blog;
      BlogService.update(data)
        .then((response) => {
          console.log(response);
          this.$router.push(this.LocalPagePath);
        })
        .catch((err) => {
          console.error(err);
          alert("update error");
        });
    },

    closeModal() {
      this.$emit("close-modal");
    },

    clearData() {
      this.blog.id = 0;
      this.blog.title = "";
      this.blog.content = "";
      this.blog.blogType = "";
    },

    hanldeSubmit(event) {
      console.log(this.blog);
      if (this.ModalType === "create") {
        this.createBlog(event);
      } else if (this.ModalType === "update") {
        this.updateBlog(event);
      }
    },
  },
  watch: {
    data: {
      handler(newData) {
        this.blog = { ...newData };
      },
      immediate: true,
    },
  },
};
</script>
<style>
@import url("/src/assets/style.css");

.modal-header {
  background-color: #007bff;
  color: white;
}

.modal-body {
  padding: 20px;
  background-color: #f8f9fa;
}

.modal-footer {
  background-color: #f8f9fa;
}

.modal-title {
  font-weight: bold;
}

/* Make sure the background content is not interactable */
.modal-backdrop.show {
  opacity: 0.5;
}

.modal-backdrop {
  z-index: 1040;
}

.modal {
  display: block;
  z-index: 1050;
}
</style>
