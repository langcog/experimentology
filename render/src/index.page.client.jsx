import { hydrate } from 'preact'
import { getPage } from 'vite-plugin-ssr/client'

const render = async () => {
	const { url, body, Page } = await getPage();

	hydrate(<Page url={ url } body={ body }/>, document.body);
}

render();