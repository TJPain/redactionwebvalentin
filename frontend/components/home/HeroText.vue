<template>
  <div w="full" max-w="md:320" h="auto" p="x-5 md:x-10" m="y-15 md:y-20 x-auto">
    <h2 v-if="heroText" font="medium" text="dark-600 4xl md:5xl center">
      {{ heroText }}
    </h2>
    <h2 v-else font="medium" text="dark-600 4xl md:5xl center">
      Jeune homme authentique à la recherche de nouvelles aventures, <span font="bold">Valentin à votre service!</span>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    heroText: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
