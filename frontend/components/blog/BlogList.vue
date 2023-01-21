<template>
  <section max-w="300" w="full" m="x-auto">
    <div flex="~ row wrap" align="items-center">
      <div
        v-for="blog in blogs.data"
        :key="blog.id"
        w="full md:1/2"
        m="b-4"
        p="3"
        h="80"
        rounded="lg"
      >
        <BlogTile :blog="blog" />
      </div>
    </div>
  </section>
</template>

<script>
import BlogTile from '~/components/blog/BlogTile.vue'

export default {
  components: {
    BlogTile
  },
  props: {
    blogs: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  }
}
</script>
