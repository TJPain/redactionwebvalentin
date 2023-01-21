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
        {{ category.data.attributes.name }}
      </h1>
      <BlogList :blogs="category.data.attributes.blogs" />
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
      category: {
        data: []
      },
      api_url: process.env.strapiBaseUri
    }
  },
  computed: {
    getCategory () { return this.category.data.attributes ? this.category.data : null }
  },
  apollo: {
    category: {
      prefetch: true,
      query: blogsQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
