
const express = require("express");
const ngrok = require("@ngrok/ngrok");

const app = express();
const PORT = 8080;

// Serve static files from current folder
app.use(express.static("."));

// Start local server
app.listen(PORT, async () => {
  console.log(`⚡ Local server running at http://localhost:${PORT}`);

  try {
    // Start ngrok tunnel
    const listener = await ngrok.connect({ addr: PORT, authtoken_from_env: true });
    console.log(`🌍 Public URL: ${listener.url()}`);
  } catch (err) {
    console.error("❌ Error starting ngrok:", err.message);
  }
});
