export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "features": [
      {
        "title": "Drawing Purge",
        "details": "This plug-in helps to remove the unused DGN linetypes, textstyles, regapps and annotation scales and so many other items from either the current drawing or multiple drawings in batch processing."
      },
      {
        "title": "My Xrefs",
        "details": "This plug-in will save all the xref properties to an external database, so that next time you can attach the xrefs very easily."
      }
    ],
    "actions": [
      {
        "text": "See Apps",
        "link": "/apps/",
        "type": "primary"
      }
    ],
    "footer": "Developed by using VuePress by AV"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
