const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Đường dẫn API bạn muốn proxy
    createProxyMiddleware({
      target: 'http://dev-api.homecharger.link:8080', // URL của backend
      changeOrigin: true, // Thay đổi origin của request để phù hợp với target
      secure: false, // Tắt kiểm tra SSL nếu bạn sử dụng HTTP
      logLevel: "debug", // Helps with debugging
    })
  );
};