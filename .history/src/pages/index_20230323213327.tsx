import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import PostList, { PostForPostList } from '@/components/PostList';
import { allPostsNewToOld } from '@/lib/contentLayerAdapter';

type PostForIndexPage = PostForPostList;

type Props = {
  posts: PostForIndexPage[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = allPostsNewToOld.map((post) => ({
    slug: post.slug,
    date: post.date,
    title: post.title,
    description: post.description,
    path: post.path,
  })) as PostForIndexPage[];
  return { props: { posts } };
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Next.js Tailwind Contentlayer Blog Starter</title>
        <meta name="description" content="Welcome to my blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="prose my-12 space-y-2 transition-colors dark:prose-dark md:prose-lg md:space-y-5">
        <h1 className="text-center sm:text-left">Hey，I am Iron Man ?</h1>
        <p>我是 Tony Stark，不是 Stank！</p>
        <p>老子很有錢，拯救過很多次世界。</p>
        <p>我討厭外星人、紫色的東西、和紫色外星人。</p>
      </div>

      <div className="my-4 divide-y divide-gray-200 transition-colors dark:divide-gray-700">
        <div className="prose prose-lg my-8 dark:prose-dark">
          <h2>最新文章</h2>
        </div>

        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Home;
