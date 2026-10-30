import { renderToString } from '@vue/server-renderer'
import { createMemoryHistory } from 'vue-router'
import { createApplication } from './app'

export async function prerender({ url }) {
  const { app, router } = createApplication({
    history: createMemoryHistory(import.meta.env.BASE_URL),
    hydrate: true,
  })

  await router.push(url)
  await router.isReady()

  return {
    html: await renderToString(app),
    links: new Set(router.getRoutes().map((route) => route.path)),
  }
}