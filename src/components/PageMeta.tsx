import { useEffect } from 'react'
import { SITE_NAME } from '../content/site'

type Props = {
  title: string
  description: string
  path: string
}

export function PageMeta({ title, description, path }: Props) {
  useEffect(() => {
    const full = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`
    document.title = full

    const origin = window.location.origin
    const base = import.meta.env.BASE_URL.replace(/\/$/, '')
    const canonicalHref = `${origin}${base}${path === '/' ? '/' : path}`

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (selector.startsWith('meta[name="')) {
          el.setAttribute('name', selector.slice(11, -2))
        } else if (selector.startsWith('meta[property="')) {
          el.setAttribute('property', selector.slice(15, -2))
        }
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', full)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:type"]', 'content', 'website')
    setMeta('meta[property="og:url"]', 'content', canonicalHref)

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonicalHref
  }, [title, description, path])

  return null
}
