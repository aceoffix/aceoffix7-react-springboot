const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/dev-api',
    createProxyMiddleware({
      target: 'http://localhost:8011/aceoffix7-springboot2-back',
      changeOrigin: true,
      pathRewrite: {
        '^/dev-api': '',
      },
    })
  );
};