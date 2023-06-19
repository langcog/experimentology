import express           from 'express'
import { dirname }       from 'path'
import { fileURLToPath } from 'url'
import { createServer }  from 'vite'
import { renderPage }    from 'vite-plugin-ssr/server'

const port = process.env.PORT || 3000;
const root = dirname(fileURLToPath(import.meta.url));

startServer();

async function startServer() {
	const app = express();

	const viteDevServer = await createServer({
		root,
		server: { middlewareMode: true },
	});

	app.use(viteDevServer.middlewares);

	app.get('*', async (req, res, next) => {
		const pageContextInit = { urlOriginal: req.originalUrl };
		const pageContext     = await renderPage(pageContextInit);

		if (pageContext.httpResponse === null) return next();

		const { body, statusCode, contentType } = pageContext.httpResponse;

		res.status(statusCode).type(contentType).send(body);
	})

	app.listen(port);

	console.log(`http://localhost:${port}`);
}
