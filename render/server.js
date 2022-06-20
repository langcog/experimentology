import express                from 'express'
import { dirname }            from 'path'
import { fileURLToPath }      from 'url'
import { createServer }       from 'vite'
import { createPageRenderer } from 'vite-plugin-ssr'

const port = process.env.PORT || 3000;
const root = dirname(fileURLToPath(import.meta.url));

const startServer = async () => {
	const app = express();

	const viteDevServer = await createServer({
		server: { middlewareMode: 'ssr' },
	});

	const render = createPageRenderer({ root, viteDevServer });

	app.use(viteDevServer.middlewares);

	app.get('*', async (req, res, next) => {
		const { url }          = req;
		const { httpResponse } = await render({ url });

		if (! httpResponse) return next();

		const { body, statusCode, contentType } = httpResponse;

		res.status(statusCode).type(contentType).send(body);
	});

	app.listen(port);

	console.log(`http://localhost:${port}`);
}

startServer();