const express = require('express');
const app = express();
const visiteur = process.env.visiteur || 'Anonyme';

 app.get('/', (req, res) => {
res.send('Hello World!this is my first render:congratulations');
});

app.get('/health', (req, res) => {
  res.json({
    status: "ok",
    environment: process.env.APP_ENV || "local"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
