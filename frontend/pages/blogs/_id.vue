<template>
  <div v-if="getBlog">
    <div
      v-if="blog.data.attributes.image.data"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="api_url + blog.data.attributes.image.data.attributes.url"
      uk-img
    >
      <h1>{{ blog.data.attributes.title }}</h1>
    </div>
    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <div v-if="blog.data.attributes.content" id="editor" v-html="$md.render(blog.data.attributes.content)" />
        <p v-if="blog.data.publishedAt">
          {{ blog.data.attributes.publishedAt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import blogQuery from '~/apollo/queries/blog/blog'

export default {
  data () {
    return {
      blog: {
        data: []
      },
      api_url: process.env.strapiBaseUri
    }
  },
  computed: {
    getBlog () { return this.blog.data.attributes ? this.blog.data : null }
  },
  apollo: {
    blog: {
      prefetch: true,
      query: blogQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>

<style scoped>
  a {
    color: #0F766E !important
  }
</style>
