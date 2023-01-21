<template>
  <div>
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
        <!-- <div v-if="blog.data.attributes.content" id="editor">
          {{ blog.data.attributes.content }}
        </div> -->
        <div v-if="blog.content" id="editor" v-html="$md.render(article.content)" />
        <p v-if="blog.data.publishedAt">
          {{ blog.data.attributes.publishedAt }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import blogsQuery from '~/apollo/queries/blog/blogs'

export default {
  data () {
    return {
      blog: {
        data: []
      },
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    blo: {
      prefetch: true,
      query: blogsQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
