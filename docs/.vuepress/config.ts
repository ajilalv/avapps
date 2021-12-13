import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'AVapps',
  description: 'avapps',
  themeConfig: {
    logo: '/img/av.png',
    logoDark:'/img/avdark.png',
    navbar: [
      // NavbarItem
      { text: 'Apps', link: '/apps/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: {
      '/apps/': [
        {
          text: 'Apps',
          children: [
            {
              text: 'Drawing Purge',
              link: '/apps/purge',
              children:
                [
                  '/apps/purge/commands',
                  '/apps/purge/faqs',
                  '/apps/purge/versions',
                  '/apps/purge/localization',
                  '/apps/purge/suggestions',
                  '/apps/purge/thankyou'
                ],
            },
            {
              text: 'My Xrefs',
              link: '/apps/myxrefs',
              children:
                [
                  '/apps/myxrefs/commands',
                  '/apps/myxrefs/faqs',
                  '/apps/myxrefs/versions',
                  '/apps/myxrefs/suggestions',
                ],
            }
          ],
        },
      ],
    },
  },
  plugins: [
    ['@vuepress/plugin-search',
      {
        search: true,
        searchMaxSuggestions: 10
      }]
  ]
})