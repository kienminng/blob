<template>
    <header class="py-5 bg-light border-bottom mb-4">
    <div class="container">
      <div class="text-center my-5">
        <h1 class="fw-bolder">Welcome to Blog Home!</h1>
        <p class="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
        <button class="btn btn-warning"  style="display: inline-block;">Start your blog</button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
    name: "BlogHeader",
    props: {
        msg: String
    }
}
</script>
<style>
@import url("/src/assets/style.css");
</style>