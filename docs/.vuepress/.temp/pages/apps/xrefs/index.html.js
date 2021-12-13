export const data = {
  "key": "v-e1d61bca",
  "path": "/apps/xrefs/",
  "title": "My Xrefs",
  "lang": "en-US",
  "frontmatter": {
    "title": "My Xrefs"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "My Xrefs",
      "slug": "my-xrefs",
      "children": []
    }
  ],
  "filePathRelative": "apps/xrefs/README.md",
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
