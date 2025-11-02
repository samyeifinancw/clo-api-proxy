const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/binance", async (req, res) => {
  try {
    const r = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=CLOUSDT", {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    const txt = await r.text();
    res.set("Access-Control-Allow-Origin", "*");
    res.type("application/json").send(txt);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.get("/bybit", async (req, res) => {
  try {
    const r = await fetch("https://api.bybit.com/v5/market/tickers?category=linear&symbol=CLOUSDT", {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    const txt = await r.text();
    res.set("Access-Control-Allow-Origin", "*");
    res.type("application/json").send(txt);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
