/* eslint-disable no-console */

import express from 'express';

const app = express();
app.use(express.static(`${__dirname}/../public`));

app.get('/', (req, res) => {
  res.sendfile(`${__dirname}/../public/index.html`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
