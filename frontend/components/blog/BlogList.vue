<template>
  <section max-w="300" w="full" m="x-auto y-8 md:y-15" p="x-5 md:x-10">
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link
          v-for="blog in leftBlogs"
          :key="blog.id"
          :to="{ name: 'blogs-id', params: { id: blog.id } }"
          class="uk-link-reset"
        >
          <div class="uk-card uk-card-muted">
            <div v-if="blog.attributes.image.data" class="uk-card-media-top">
              <img
                :src="api_url + blog.attributes.image.data.attributes.url"
                alt=""
                height="100"
              >
            </div>
            <div class="uk-card-body">
              <p
                v-if="blog.attributes.category.data"
                id="category"
                class="uk-text-uppercase"
              >
                {{ blog.attributes.category.data.attributes.name }}
              </p>
              <p id="title" class="uk-text-large">
                {{ blog.attributes.title }}
              </p>
              <p id="subtitle" class="uk-text-large">
                {{ blog.attributes.subtitle }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <router-link
            v-for="blog in rightBlogs"
            :key="blog.id"
            :to="{ name: 'blogs-id', params: { id: blog.id } }"
            class="uk-link-reset"
          >
            <div class="uk-card uk-card-muted">
              <div
                v-if="blog.attributes.image.data"
                class="uk-card-media-top"
              >
                <img
                  :src="api_url + blog.attributes.image.data.attributes.url"
                  alt=""
                  height="100"
                >
              </div>
              <div class="uk-card-body">
                <p
                  v-if="blog.attributes.category.data"
                  id="category"
                  class="uk-text-uppercase"
                >
                  {{ blog.attributes.category.data.attributes.name }}
                </p>
                <p id="title" class="uk-text-large">
                  {{ blog.attributes.title }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blogs: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      api_url: process.env.strapiBaseUri
    }
  },
  computed: {
    leftBlogsCount () {
      return Math.ceil(this.blogs.data.length / 5)
    },
    leftBlogs () {
      return this.blogs.data.slice(0, this.leftBlogsCount)
    },
    rightBlogs () {
      return this.blogs.data.slice(
        this.leftBlogsCount,
        this.blogs.length
      )
    }
  }
}
</script>
