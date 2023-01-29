<template>
  <section v-if="getCategory">
    <div
      max-w="300"
      w="full"
      min-h="100"
      m="x-auto"
      p="8 md:15"
    >
      <h1 font="bold" text="dark-600 4xl md:5xl center" m="b-10">
        {{ categories.data[0].attributes.name }}
      </h1>
      <BlogList :blogs="categories.data[0].attributes.blogs" />
    </div>
  </section>
</template>

<script>
import blogsQuery from '~/apollo/queries/blog/blogs-categories'
import BlogList from '~/components/blog/BlogList.vue'

export default {
  components: {
    BlogList
  },
  data () {
    return {
      categories: {
        data: []
      },
      api_url: process.env.strapiBaseUri
    }
  },
  computed: {
    getCategory () { return this.categories.data[0].attributes ? this.categories.data : null }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: blogsQuery,
      variables () {
        return { slug: this.$route.params.slug }
      }
    }
  }
}
</script>
