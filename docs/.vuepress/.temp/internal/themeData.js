export const themeData = {
  "logo": "/img/av.png",
  "logoDark": "/img/avdark.png",
  "navbar": [
    {
      "text": "Apps",
      "link": "/apps/"
    },
    {
      "text": "Contact",
      "link": "/contact/"
    }
  ],
  "sidebar": {
    "/apps/": [
      {
        "text": "Apps",
        "children": [
          {
            "text": "Drawing Purge",
            "link": "/apps/purge",
            "children": [
              "/apps/purge/commands",
              "/apps/purge/faqs",
              "/apps/purge/versions",
              "/apps/purge/localization",
              "/apps/purge/suggestions",
              "/apps/purge/thankyou"
            ]
          },
          {
            "text": "My Xrefs",
            "link": "/apps/myxrefs",
            "children": [
              "/apps/myxrefs/commands",
              "/apps/myxrefs/faqs",
              "/apps/myxrefs/versions",
              "/apps/myxrefs/suggestions"
            ]
          }
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
