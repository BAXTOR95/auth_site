const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy to the frontend server
// https://create-react-app.dev/docs/proxying-api-requests-in-development/
module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: 'http://localhost:5000',
			changeOrigin: true,
		}),
	);
};
