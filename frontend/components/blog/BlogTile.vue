<template>
  <div
    v-if="blog.attributes.image.data"
    :style="{ backgroundImage: `linear-gradient(0deg, rgba(17,17,17,0.60) 0%, rgba(17,17,17,0.60) 100%), url(${api_url + blog.attributes.image.data.attributes.url})`}"
    bg="cover"
    position="relative"
    w="full"
    min-h="80"
    h="full"
    rounded="lg"
  >
    <div p="x-5 y-10" h="80" flex="~ col auto" style="justify-content: space-between">
      <div>
        <div w="full" m="b-5">
          <NuxtLink
            v-if="blog.attributes.category.data"
            :to="{ name: 'tag-id', params: { id: blog.attributes.category.data.id } }"
            bg="teal-600 hover:teal-500"
            text="sm white hover:white"
            p="x-6 y-1.5"
            m="b-8"
            rounded="md"
            style="text-decoration: none"
            class="transition-all duration-300 ease-in-out"
          >
            {{ blog.attributes.category.data.attributes.name }}
          </NuxtLink>
        </div>
        <NuxtLink :to="{ name: 'blog-id', params: { id: blog.id } }" style="text-decoration: none">
          <h4 text="white hover:white 2xl md:4xl" font="semibold" style="text-decoration: none" m="b-5">
            {{ blog.attributes.title }}
          </h4>
          <p id="subtitle" text="white base md:lg" font="medium">
            {{ blog.attributes.subtitle }}
          </p>
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          :to="{ name: 'blog-id', params: { id: blog.id } }"
          border="2 white hover:teal-500"
          rounded="lg"
          p="x-5 y-2"
          text="white base hover:dark-700"
          font="medium"
          style="text-decoration: none"
          bg="hover:teal-500"
          class="transition-all duration-300 ease-in-out"
        >
          Lisez-moi
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  }
}
</script>
