<template>
  <section max-w="200" w="full" m="x-auto y-8" p="x-5 md:x-10">
    <h4 font="semibold" text="dark-600 2xl md:3xl center" m="b-15">
      Tags
    </h4>
    <div space="x-3" flex="~ row auto wrap" align="items-center" justify="center">
      <NuxtLink
        v-for="category in categories.data"
        :key="category.id"
        :to="{ name: 'categories-id', params: { id: category.id } }"
        bg="teal-700 hover:teal-600"
        text="base white hover:white"
        p="x-8 y-2.5"
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
    }
  }
}
</script>
