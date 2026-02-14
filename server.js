const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/v1/snake', (req, res) => {
  const { text } = req.body;
  if (!text && text !== "") return res.status(400).json({ error: "Missing text" });
  const result = text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');
  res.json({ result });
});

app.listen(process.env.PORT || 3000);
