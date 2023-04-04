import { useMemo } from 'react';
import { createAction, useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { PostForCommandPalette } from './getCommandPalettePosts';

export const useCommandPalettePostActions = (
  posts: PostForCommandPalette[]
): void => {
  const router = useRouter();

  const actions = useMemo(
    () =>
    
    createAction({
      posts.map((post) => ({
        id: post.slug,
        name: post.title,
        perform: () => router.push(post.path),
        section: '搜尋文章',
        parent: 'search-posts',
      }))}),
    [posts, router]
  );

  useRegisterActions(actions, [actions]);
};