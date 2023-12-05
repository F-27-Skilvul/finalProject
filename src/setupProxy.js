const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'https://ademystapi.adaptable.app',
      changeOrigin: true,
    })
  );
};
