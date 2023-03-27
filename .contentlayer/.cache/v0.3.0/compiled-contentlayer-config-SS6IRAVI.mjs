// contentlayer.config.js
import rehypeCodeTitles from "rehype-code-titles";

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
import rehypePrism from "rehype-prism-plus";
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
  documentTypes: [Post2],
  mdx: {
    rehypePlugins: [rehypeCodeTitles, [rehypePrism, { ignoreMissing: true }]]
  }
});
export {
  Post2 as Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-SS6IRAVI.mjs.map
