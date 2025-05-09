const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('CI/CD Node.js App deployed with GitHub Actions!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
