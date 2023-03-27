// src/lib/contentLayerAdapter.js
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
import { compareDesc } from "date-fns";
var allPostsNewToOld = (void 0)?.sort((a, b) => {
  return compareDesc(new Date(a.date), new Date(b.date));
}) || [];

// contentlayer.config.js
var Post2 = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `content/posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    slug: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    }
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (post) => `/posts/${post.slug}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post2]
});
export {
  Post2 as Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CM3RTCD4.mjs.map
