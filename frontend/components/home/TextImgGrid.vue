<template>
  <section
    :flex="reversed ? '~ col md:row-reverse' : '~ col md:row'"
    max-w="300"
    w="full"
    min-h="100"
    m="x-auto 7-8 md:y-15"
    p="8 md:15"
  >
    <div w="full md:1/2" flex="~ col auto" justify="center" :m="reversed ? 'b-7 md:b-0 md:l-7' : 'b-7 md:b-0 md:r-7'">
      <h3 font="semibold" text="dark-600 2xl md:3xl center md:left" m="b-5">
        {{ title }}
      </h3>
      <p text="center md:left">
        {{ mainText }}
      </p>
    </div>
    <img h="auto" w="full md:1/2" max-w="md:135" :src="imageSource" alt="">
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
