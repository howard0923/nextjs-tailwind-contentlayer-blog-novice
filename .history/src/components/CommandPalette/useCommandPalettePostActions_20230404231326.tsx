import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { PostForCommandPalette } from './getCommandPalettePosts';

export const useCommandPalettePostActions = (
  posts: PostForCommandPalette[]
): void => {
  const router = useRouter();
  useRegisterActions(
    posts.map((post) => ({
      id: post.slug,
      name: post.title,
      perform: () => router.push(post.path),
      section: '搜尋文章',
      parent: 'search-posts',
    })),
    []
  );
  posts = [];
};
