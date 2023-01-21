<template>
  <div w="full" h="155" p="x-5 md:x-10">
    <div
      :style="{ backgroundImage: `radial-gradient(circle, rgba(28,28,30,0.7) 0%, rgba(28,28,30,0) 100%), url(${image})`}"
      bg="cover"
      w="full"
      h="155"
      flex="~ row auto"
      align="items-center"
      justify="center"
      p="8 md:15"
    >
      <h1 font="bold" text="white center 5xl md:6xl">
        Une écriture éthique et ouverte sur le monde
      </h1>
    </div>
  </div>
</template>

<script>
import heroImg from 'assets/images/home/hero-image-alt.jpg'

export default {
  data () {
    return { image: heroImg }
  }
}
</script>
