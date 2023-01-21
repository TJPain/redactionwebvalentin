<template>
  <section>
    <div
      max-w="300"
      w="full"
      min-h="100"
      m="x-auto"
      p="8 md:15"
    >
      <h1 font="bold" text="dark-600 4xl md:5xl center" m="b-10">
        Blog
      </h1>
      <BlogList :blogs="blogs" />
    </div>
    <CategoriesList :categories="categories" />
  </section>
</template>

<script>
import blogsQuery from '~/apollo/queries/blog/blogs'
import categoriesQuery from '~/apollo/queries/category/categories'
import BlogList from '~/components/blog/BlogList.vue'
import CategoriesList from '~/components/blog/CategoriesList.vue'

export default {
  components: {
    BlogList,
    CategoriesList
  },
  data () {
    return {
      blogs: {
        data: []
      },
      categories: {
        data: []
      }
    }
  },
  apollo: {
    blogs: {
      prefetch: true,
      query: blogsQuery
    },
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
}
</script>
