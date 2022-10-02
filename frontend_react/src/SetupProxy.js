const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/proxypath', { target: 'https://localhost:3000' }));
};
