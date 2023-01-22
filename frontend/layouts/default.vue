<template>
  <div max-w="500" m="x-auto">
    <NavBar @toggleMobileMenu="showMobileMenu = !showMobileMenu" />
    <transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-class="opacity-0"
      leave-to-class="opacity-100"
    >
      <MobileMenu v-show="showMobileMenu" @closeMobileMenu="showMobileMenu = false" />
    </transition>
    <div p="t-15">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/global/NavBar.vue'
import MobileMenu from '~/components/global/MobileMenu.vue'

export default {
  components: {
    NavBar,
    MobileMenu
  },
  data () {
    return {
      showMobileMenu: false
    }
  }
}
</script>
