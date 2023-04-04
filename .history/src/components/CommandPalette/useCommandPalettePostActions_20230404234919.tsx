import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { PostForCommandPalette } from './getCommandPalettePosts';
import { useState, useMemo } from 'react';

export const useCommandPalettePostActions = (
  posts: PostForCommandPalette[]
): void => {
  const router = useRouter();
  const action = useMemo(
    () =>
      useRegisterActions(
        posts.map((post) => ({
          id: post.slug,
          name: post.title,
          perform: () => router.push(post.path),
          section: '搜尋文章',
          parent: 'search-posts',
        })),
        []
      ),
    [posts]
  );
};
