import axios from "axios";

export default async (req, res) => {
  try {
    // Fetch the RSS feed from Substack
    const response = await axios.get("https://jonwexler.substack.com/feed", {
      responseType: "text",
    });

    // Set CORS headers to allow frontend access
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/xml");

    // Send the RSS data as response
    res.end(response.data);
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    res.statusCode = 500;
    res.end("Failed to fetch RSS feed.");
  }
};
