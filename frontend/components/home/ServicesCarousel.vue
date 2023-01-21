<template>
  <section max-w="300" w="full" m="x-auto y-8 md:y-15">
    <h3 font="semibold" text="dark-600 2xl md:3xl center" m="b-5">
      Services
    </h3>
    <div v-for="(item, index) in services" :key="index">
      {{ item.title }}
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      services: [
        { title: '1' },
        { title: '2' }
      ]
    }
  }
}
</script>
