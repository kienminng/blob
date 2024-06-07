<template>
    <div>
        <top-blog-list></top-blog-list>
    </div>
    <div>
        <blog-list></blog-list>
    </div>
</template>
<script>
import TopBlogList from '../TopBlogList.vue';
import BlogList from '../BlogList.vue';


export default {
  components: { TopBlogList , BlogList },
    name : 'blog-page-body'
}
</script>