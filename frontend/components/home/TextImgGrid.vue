<template>
  <section
    :flex="reversed ? '~ row-reverse auto' : '~ row auto'"
    max-w="300"
    w="full"
    min-h="100"
    m="x-auto y-15"
  >
    <div w="1/2" flex="~ col auto" justify="center" :m="reversed ? 'l-7' : 'r-7'">
      <h3 font="semibold" text="dark-600 2xl md:3xl  md:left" m="b-5">
        {{ title }}
      </h3>
      <p>{{ mainText }}</p>
    </div>
    <img h="auto" w="1/2" max-w="135" :src="imageSource" alt="">
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    mainText: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    reversed: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    imageSource () {
      return require(`~/assets/images/${this.image}`)
    }
  }
}
</script>
