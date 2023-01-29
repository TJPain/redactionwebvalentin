<template>
  <div v-if="getBlog[0]">
    <BreadCrumb
      :items=" [
        { name: 'Blog', href: '/blog' },
        { name: getBlog[0].attributes.category.data.attributes.name, href: `/tag/${getBlog[0].attributes.category.data.attributes.slug}` },
        { name: getBlog[0].attributes.title }
      ]"
    />
    <div w="full" h="155" p="x-5 md:x-10">
      <div
        :style="{ backgroundImage: `linear-gradient(0deg, rgba(17,17,17,0.60) 0%, rgba(17,17,17,0.60) 100%), url(${blogs.data[0].attributes.image.data.attributes.url})`}"
        bg="cover"
        w="full"
        h="155"
        flex="~ col auto"
        align="items-center"
        justify="center"
        p="8 md:15"
      >
        <h1 font="bold" text="white center 5xl md:6xl">
          {{ blogs.data[0].attributes.title }}
        </h1>
        <p text="white center 2xl md:3xl" font="semibold">
          {{ blogs.data[0].attributes.subtitle }}
        </p>
      </div>
    </div>
    <div p="t-15 b-5">
      <div class="uk-container uk-container-small">
        <div v-if="blogs.data[0].attributes.content" id="editor" m="b-8" v-html="$md.render(blogs.data[0].attributes.content)" />
        <p v-if="blogs.data[0].publishedAt" m="b-8">
          {{ blogs.data[0].attributes.publishedAt }}
        </p>
      </div>
    </div>
    <CategoriesList :categories="categories" :blog-page="true" />
  </div>
</template>

<script>
import blogQuery from '~/apollo/queries/blog/blog'
import categoriesQuery from '~/apollo/queries/category/categories'
import BreadCrumb from '~/components/global/BreadCrumb.vue'
import CategoriesList from '~/components/blog/CategoriesList.vue'

export default {
  components: {
    BreadCrumb,
    CategoriesList
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri,
      blogs: {
        data: []
      },
      categories: {
        data: []
      }
    }
  },
  computed: {
    getBlog () { return this.blogs.data ? this.blogs.data : null }
  },
  apollo: {
    blogs: {
      prefetch: true,
      query: blogQuery,
      variables () {
        return { slug: this.$route.params.slug }
      }
    },
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
}
</script>

<style scoped>
  a {
    color: #0F766E !important
  }
</style>
