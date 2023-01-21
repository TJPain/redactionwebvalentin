<template>
  <div v-if="getBlog">
    <BreadCrumb
      :items=" [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: getBlog.attributes.category.data.attributes.name, href: `/categories/${getBlog.attributes.category.data.id}` },
        { name: getBlog.attributes.title }
      ]"
    />
    <div w="full" h="155" p="x-5 md:x-10">
      <div
        :style="{ backgroundImage: `linear-gradient(0deg, rgba(17,17,17,0.60) 0%, rgba(17,17,17,0.60) 100%), url(${api_url + blog.data.attributes.image.data.attributes.url})`}"
        bg="cover"
        w="full"
        h="155"
        flex="~ col auto"
        align="items-center"
        justify="center"
        p="8 md:15"
      >
        <h1 font="bold" text="white center 5xl md:6xl">
          {{ blog.data.attributes.title }}
        </h1>
        <p text="white center 2xl md:3xl" font="semibold">
          {{ blog.data.attributes.subtitle }}
        </p>
      </div>
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
import BreadCrumb from '~/components/global/BreadCrumb.vue'

export default {
  components: {
    BreadCrumb
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      blog: {
        data: []
      }
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
