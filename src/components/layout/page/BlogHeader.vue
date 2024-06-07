<template>
   <header class="py-5 bg-light border-bottom mb-4">
    <div class="container">
      <div class="text-center my-5">
        <h1 class="fw-bolder">{{ title }}</h1>
        <p class="lead mb-0">
          {{ msg }}
        </p>
        <button class="btn btn-warning" style="display: inline-block" @click="openModal(1)">
          Start to create your blog
        </button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "BlogHeader",
  props: {
    msg: String,
    title : String
  }
}
</script>
<style>
@import url("/src/assets/style.css");
</style>