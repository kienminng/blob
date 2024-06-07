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

           <li class="nav-item"><a class="nav-link" href="#"> <router-link :to="{ name: 'my-blog', params: { id: 62 } }">Go to Blog 1</router-link></a></li>
         <!-- <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li> -->
          <li type="button" class="nav-item" @click="logout()">
            <a class="nav-link active" aria-current="page">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "BlogNav"
}
</script>
<style>
@import url("/src/assets/style.css");
</style>