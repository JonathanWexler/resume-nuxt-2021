<template>
  <b-container class="d-flex flex-column align-items-center py-5 min-vh-100">
    <b-row class="w-75">
      <b-col cols="12" v-for="(article, index) in articles" :key="index">
        <b-card
          class="mb-3 shadow-lg cursor-pointer"
          @click="selectArticle(article)"
        >
          <b-row no-gutters>
            <!-- Left: Article Image -->
            <b-col cols="4">
              <b-img
                :src="extractFirstImage(article.content)"
                class="w-100 h-100 object-fit-cover"
                alt="Article image"
              ></b-img>
            </b-col>

            <!-- Right: Title & Date -->
            <b-col
              cols="8"
              class="d-flex flex-column justify-content-center p-3"
            >
              <h5 class="mb-1">{{ article.title }}</h5>
              <small class="text-muted">{{ article.pubDate }}</small>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch("articles/fetchArticles");
  },
  computed: {
    articles() {
      return this.$store.state.articles.articles;
    },
  },
  methods: {
    selectArticle(article) {
      this.$router.push(`/articles/${article.slug}`);
    },
    extractFirstImage(content) {
      const match = content.match(/<img[^>]+src="([^">]+)"/);
      return match ? match[1] : "/placeholder.png"; // Default placeholder if no image is found
    },
  },
};
</script>

<style scoped>
/* Ensures the full viewport height */
.min-vh-100 {
  min-height: 100vh;
  justify-content: flex-start;
}

/* Ensures images fit properly inside cards */
.object-fit-cover {
  object-fit: cover;
}

/* Adds cursor pointer effect */
.cursor-pointer {
  cursor: pointer;
}
</style>
