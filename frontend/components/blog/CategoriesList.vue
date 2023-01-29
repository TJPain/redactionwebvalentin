<template>
  <section max-w="200" w="full" :m="blogPage ? 'x-auto y-3' : 'x-auto y-8'" p="x-5 md:x-10">
    <h4 font="semibold" :text="blogPage ? 'dark-600 1xl md:2xl center' : 'dark-600 2xl md:3xl center'" :m="blogPage ? 'b-8' : 'b-10'">
      {{ blogPage ? 'Read more' : 'Tags' }}
    </h4>
    <div space="x-3" flex="~ row auto wrap" align="items-center" justify="center">
      <NuxtLink
        v-for="category in categories.data"
        :key="category.id"
        :to="{ name: 'tag-slug', params: { slug: category.slug } }"
        bg="teal-700 hover:teal-600"
        text="base white hover:white"
        :p="blogPage ? 'x-6 y-1.5' : 'x-8 y-2.5'"
        rounded="md"
        m="b-3"
        style="text-decoration: none"
      >
        {{ category.attributes.name }}
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    categories: {
      type: Object,
      required: true
    },
    blogPage: {
      type: Boolean,
      default: false
    }
  }
}
</script>
