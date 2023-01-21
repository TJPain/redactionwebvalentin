<template>
  <section>
    <div
      max-w="300"
      w="full"
      min-h="100"
      m="x-auto 7-8 md:y-15"
      p="8 md:15"
    >
      <h1 font="bold" text="dark-600 4xl md:5xl center" m="b-10">
        Blog
      </h1>
      <BlogList :blogs="blogs" />
    </div>
  </section>
</template>

<script>
import blogsQuery from '~/apollo/queries/blog/blogs'
import BlogList from '~/components/blog/BlogList.vue'

export default {
  components: {
    BlogList
  },
  data () {
    return {
      blogs: {
        data: []
      }
    }
  },
  apollo: {
    blogs: {
      prefetch: true,
      query: blogsQuery
    }
  }
}
</script>
