var express = require('express'),
  requestProxy = require('express-request-proxy'),
  port = process.env.PORT || 3000,
  app = express();

function proxyGithub(request, response) {
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0]
  }))(request, response);
}

app.get('/github/*', proxyGithub);

app.use(express.static('./'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
