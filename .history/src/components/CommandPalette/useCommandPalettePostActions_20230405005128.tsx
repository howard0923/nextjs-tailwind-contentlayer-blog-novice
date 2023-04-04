import { useMemo } from 'react';
import { createAction, useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { PostForCommandPalette } from './getCommandPalettePosts';
import { type Action } from 'kbar';

export const useCommandPalettePostActions = (
  posts: PostForCommandPalette[]
): void => {
  const router = useRouter();
  const rootActions = {
    id: 'Articles',
    name: 'Search Articles...',
    keywords: 'search for articles',
    section: 'Articles',
  };

  const actions = useMemo(
    () =>
      posts.map((post) =>
        createAction({
          id: post.slug,
          name: post.title,
          perform: () => router.push(post.path),
          section: '搜尋文章',
          parent: 'Articles',
        })
      ),
    [posts, router]
  );

  useRegisterActions([rootActions, ...actions].filter(Boolean) as Action[]);
};
