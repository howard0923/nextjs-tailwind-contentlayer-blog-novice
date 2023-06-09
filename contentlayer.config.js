import rehypeCodeTitles from 'rehype-code-titles';
import { defineDocumentType, makeSource } from './src/lib/contentLayerAdapter';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import imageMetadata from './src/plugins/imageMetadata';
export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `content/posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    socialImage: {
      type: 'string',
    },
    redirectFrom: {
      type: 'list',
      of: { type: 'string' },
    },
    category: {
      type: 'string',
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (post) => `/posts/${post.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [rehypePrism, { ignoreMissing: true }],
      imageMetadata, // For adding image metadata (width, height)
    ],
  },
});
