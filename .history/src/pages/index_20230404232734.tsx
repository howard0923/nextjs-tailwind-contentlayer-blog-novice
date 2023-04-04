import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ArticleJsonLd } from 'next-seo';
import React, { useState } from 'react';

import PostList, { PostForPostList } from '@/components/PostList';
import { siteConfigs } from '@/configs/siteConfigs';
import { allPostsNewToOld } from '@/lib/contentLayerAdapter';
import generateRSS from '@/lib/generateRSS';
import {
  getCommandPalettePosts,
  PostForCommandPalette,
} from '@/components/CommandPalette/getCommandPalettePosts';
import { useCommandPalettePostActions } from '@/components/CommandPalette/useCommandPalettePostActions';

type PostForIndexPage = PostForPostList;

type Props = {
  posts: PostForIndexPage[];
  commandPalettePosts: PostForCommandPalette[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const commandPalettePosts = getCommandPalettePosts();
  const posts = allPostsNewToOld.map((post) => ({
    slug: post.slug,
    date: post.date,
    title: post.title,
    description: post.description,
    path: post.path,
  })) as PostForIndexPage[];
  generateRSS();

  return { props: { posts, commandPalettePosts } };
};

const Home: NextPage<Props> = ({ posts, commandPalettePosts }) => {
  const [palettePosts, setPalettePosts] = useState({});
  setPalettePosts(commandPalettePosts);
  useCommandPalettePostActions(palettePosts: PostForCommandPalette[] );
  return (
    <>
      <ArticleJsonLd
        type="Blog"
        url={siteConfigs.fqdn}
        title={siteConfigs.title}
        images={[siteConfigs.bannerUrl]}
        datePublished={siteConfigs.datePublished}
        authorName={siteConfigs.author}
        description={siteConfigs.description}
      />
      <div className="prose my-12 space-y-2 transition-colors dark:prose-dark md:prose-lg md:space-y-5">
        <h1 className="text-center sm:text-left">Hey，I am Howard </h1>
        <p>立志成為全端工程師</p>
        <p>
          這裡會分享一些<strong>網站開發、軟體工程</strong>的觀念筆記，實作過程
        </p>
      </div>
      <div className="my-4 divide-y divide-gray-200 transition-colors dark:divide-gray-700">
        <div className="prose prose-lg my-8 dark:prose-dark">
          <h2>最新文章</h2>
        </div>

        <PostList posts={posts} />
      </div>
    </>
  );
};

export default Home;
