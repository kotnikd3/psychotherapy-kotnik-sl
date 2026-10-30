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

  const { path, meta } = router.currentRoute.value
  const canonical = new URL(path, 'https://psihoterapija-kotnik.si').href
  const englishUrl = new URL(meta.englishPath, 'https://psychotherapy-kotnik.com').href

  return {
    html: await renderToString(app),
    links: new Set(router.getRoutes().map((route) => route.path)),
    head: {
      title: meta.title,
      elements: new Set([
        { type: 'link', props: { rel: 'canonical', href: canonical } },
        { type: 'link', props: { rel: 'alternate', hreflang: 'sl', href: canonical } },
        { type: 'link', props: { rel: 'alternate', hreflang: 'en', href: englishUrl } },
        { type: 'link', props: { rel: 'alternate', hreflang: 'x-default', href: canonical } },
        { type: 'meta', props: { name: 'description', content: meta.description } },
        { type: 'meta', props: { property: 'og:title', content: meta.title } },
        { type: 'meta', props: { property: 'og:description', content: meta.description } },
        { type: 'meta', props: { property: 'og:url', content: canonical } },
      ]),
    },
  }
}