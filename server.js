var express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('dist/'));

app.listen(port);
