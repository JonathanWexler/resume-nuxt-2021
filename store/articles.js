import { parseStringPromise } from "xml2js";

export const state = () => ({
  articles: [],
});

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles;
  },
};

export const actions = {
  async fetchArticles({ commit, state }) {
    if (state.articles.length) return; // Prevent refetching

    try {
      // Fetch RSS feed from Nuxt's internal proxy
      const xmlData = await this.$axios.$get("/api/rss", {
        responseType: "text",
      });

      const parsedData = await parseStringPromise(xmlData);
      const articles = parsedData.rss.channel[0].item
        .map((item) => ({
          title: item.title[0],
          slug: item.title[0].toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          link: item.link[0],
          description: item.description ? item.description[0] : "",
          content: item["content:encoded"] ? item["content:encoded"][0] : "",
          pubDate: new Date(item.pubDate[0]).toLocaleDateString(),
        }))
        .filter((item) => item.title !== "Coming soon");

      commit("SET_ARTICLES", articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  },
};
