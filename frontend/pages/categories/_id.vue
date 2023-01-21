<template>
  <div>
    <client-only>
      <div class="uk-section">
        <div v-if="getCategory" class="uk-container uk-container-large">
          <h1>{{ category.data.attributes.name }}</h1>
          <!-- <Articles :articles="category.data.attributes.articles" /> -->
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import blogsQuery from '~/apollo/queries/blog/blogs-categories'
// import Articles from '~/components/Articles'
export default {
  components: {
    // Articles
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
