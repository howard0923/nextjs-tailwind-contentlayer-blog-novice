import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { PostForCommandPalette } from './getCommandPalettePosts';
import { useState, useMemo } from 'react';
export const useCommandPalettePostActions = useMemo(
  (posts: PostForCommandPalette[]): void => {
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
  }
);
