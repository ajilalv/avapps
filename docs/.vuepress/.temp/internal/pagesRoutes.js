import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-6d34f632","/contact.html","Contact",["/contact","/contact.md"]],
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-144e84a4","/apps/","Apps",["/apps/index.html","/apps/README.md"]],
  ["v-0db99e2c","/apps/myxrefs/commands.html","Commands",["/apps/myxrefs/commands","/apps/myxrefs/commands.md"]],
  ["v-cf7f6616","/apps/myxrefs/faqs.html","FAQs",["/apps/myxrefs/faqs","/apps/myxrefs/faqs.md"]],
  ["v-3a4f35c7","/apps/myxrefs/","My Xrefs",["/apps/myxrefs/index.html","/apps/myxrefs/README.md"]],
  ["v-5c76e1de","/apps/myxrefs/suggestions.html","Suggestions",["/apps/myxrefs/suggestions","/apps/myxrefs/suggestions.md"]],
  ["v-1d1f50b7","/apps/myxrefs/versions.html","Versions",["/apps/myxrefs/versions","/apps/myxrefs/versions.md"]],
  ["v-39ea09c9","/apps/purge/commands.html","Commands",["/apps/purge/commands","/apps/purge/commands.md"]],
  ["v-82472558","/apps/purge/faqs.html","FAQs",["/apps/purge/faqs","/apps/purge/faqs.md"]],
  ["v-1c0a3458","/apps/purge/localization.html","Localization",["/apps/purge/localization","/apps/purge/localization.md"]],
  ["v-fcc342f0","/apps/purge/","Drawing Purge",["/apps/purge/index.html","/apps/purge/README.md"]],
  ["v-1457d45c","/apps/purge/suggestions.html","Suggestions",["/apps/purge/suggestions","/apps/purge/suggestions.md"]],
  ["v-5efa837c","/apps/purge/thankyou.html","Thank You !",["/apps/purge/thankyou","/apps/purge/thankyou.md"]],
  ["v-5de62996","/apps/purge/versions.html","Versions",["/apps/purge/versions","/apps/purge/versions.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
