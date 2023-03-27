// src/lib/contentLayerAdapter.js
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";

// contentlayer.config.js
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `content/posts/**/*.md`,
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
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-DKPSFZZR.mjs.map
