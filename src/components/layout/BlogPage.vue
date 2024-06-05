<template>
    <blog-nav></blog-nav>
    <blog-header></blog-header>
    <router-view />
</template>
<script>
import BlogHeader from './BlogHeader.vue'
import BlogNav from './BlogNav.vue'
export default {
  components: { BlogNav, BlogHeader },
    names: "BlogPage"
}
</script>
<style>
@import url("/src/assets/style.css");
</style>