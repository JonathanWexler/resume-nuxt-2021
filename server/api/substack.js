import { parseStringPromise } from "xml2js";
import fetch from "node-fetch";

export default async function (req, res) {
  const RSS_FEED_URL = "https://jonwexler.substack.com/feed";

  try {
    const response = await fetch(RSS_FEED_URL);
    const xmlData = await response.text();

    const parsedData = await parseStringPromise(xmlData);
    const articles = parsedData.rss.channel[0].item; // Extract articles

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(articles));
  } catch (error) {
    console.error("Failed to fetch RSS:", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Failed to fetch articles" }));
  }
}
