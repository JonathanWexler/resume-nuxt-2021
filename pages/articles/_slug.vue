<template>
  <b-container class="d-flex align-items-start vh-100 pt-5">
    <b-card v-if="article" class="w-75 p-4">
      <h1 class="mb-3">{{ article.title }}</h1>
      <p class="text-muted">{{ article.pubDate }}</p>
      <div class="prose" v-html="article.content"></div>
    </b-card>

    <b-card v-else class="w-50 p-4">
      <b-spinner variant="primary" label="Loading"></b-spinner>
      <p class="mt-3 text-muted">Loading article...</p>
    </b-card>
  </b-container>
</template>

<script>
import "~/assets/articles.css";

export default {
  async asyncData({ params, store }) {
    await store.dispatch("articles/fetchArticles");

    const article = store.state.articles.articles.find(
      (a) => a.slug === params.slug
    );

    if (!article) {
      throw new Error("Article not found");
    }

    return { article };
  },
  head() {
    return {
      title: this.article ? this.article.title : "Article",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description || "",
        },
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description || "",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Ensures the container takes full height */
.vh-100 {
  height: 100vh;
}

.mb-3 {
  text-align: left;
}

/* Adds padding to prevent content from touching the top */
.pt-5 {
  padding-top: 400px;
  padding-bottom: 400px;
}
.pt-4 {
  margin-bottom: 400px;
}

/* Better readability */
.prose {
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
