<template>
  <div>
    <client-only>
      <div class="uk-section">
        <div class="uk-container uk-container-large">
          <h1>{{ category.data.attributes.name }}</h1>
          <!-- <BlogList :articles="category.data.attributes.articles" /> -->
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import blogsQuery from '~/apollo/queries/blog/blog-categories'
// import BlogList from '~/components/blog/BlogList.vue'
export default {
  components: {
    // BlogList
  },
  data () {
    return {
      category: {
        data: []
      }
    }
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
