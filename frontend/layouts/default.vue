<template>
  <div max-w="500" m="x-auto">
    <NavBar />
    <div p="t-15">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/global/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
