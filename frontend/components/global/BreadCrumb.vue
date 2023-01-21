<template>
  <div w="full" m="t-5" p="x-5 md:x-10">
    <ul
      itemscope
      itemtype="http://schema.org/BreadcrumbList"
      flex="~ row auto wrap"
      p="l-0"
      m="b-0"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        itemprop="itemListElement"
        itemscope
        itemtype="http://schema.org/ListItem"
        m="t-3"
      >
        <a
          v-if="item.href"
          :href="item.href"
          itemprop="item"
          flex="~ row"
          align="items-center"
          space="x-5"
          m="r-5"
        ><span itemprop="name" text="dark-700 hover:teal-700" font="normal">{{ item.name }}</span>
          <img src="~/static/icons/arrow-right.png" h="3.5" w="auto">
        </a>
        <p v-else itemprop="item">
          <span itemprop="name" text="dark-700" font="bold">{{ item.name }}</span>
        </p>
        <meta itemprop="position" :content="index">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    border: {
      type: Boolean,
      required: false,
      default: true
    },
    mobileBorder: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
