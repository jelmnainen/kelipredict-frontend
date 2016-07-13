const express = require('express');
const app = express();
const fallback = require('express-history-api-fallback')

const root = `frontend/static`

app.use(express.static(root));
app.use(express.static('frontend/bin'));
app.use(fallback('index.html', { root }))

const server = app.listen(8080, function () {
  console.log('server listening on port 8080!');
});
