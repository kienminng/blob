<template>
  <blog-nav></blog-nav>
  <router-view />
  <blog-footer></blog-footer>
</template>
<script>
// import BlogHeader from './BlogHeader.vue'
import BlogNav from './BlogNav.vue'
// import TopBlogList from './TopBlogList.vue'
import BlogFooter from './BlogFooter.vue'

export default {
  components: {   BlogFooter , BlogNav },
  names: "BlogPage"
}
</script>
<style>
@import url("/src/assets/style.css");
</style>