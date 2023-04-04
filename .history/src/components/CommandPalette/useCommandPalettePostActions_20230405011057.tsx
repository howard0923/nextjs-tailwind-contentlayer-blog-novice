import { useMemo } from 'react';
import { createAction, useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { PostForCommandPalette } from './getCommandPalettePosts';
import { type Action } from 'kbar';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const useCommandPalettePostActions = (
  posts: PostForCommandPalette[]
): void => {
  const router = useRouter();
  const rootActions = {
    id: 'search-posts',
    name: '文章',
    keywords:
      'search find posts writing words blog articles thoughts 搜尋 尋找 文章 寫作 部落格',
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    section: '搜尋',
  };
  const getAction = () => {};

  const actions = useMemo(
    () =>
      posts.map((post) => {
        const actionExists = getAction(post.slug);
        if (actionExists) {
          return null; // return null if action already exists
        }
        return createAction({
          id: post.slug,
          name: post.title,
          perform: () => router.push(post.path),
          section: '搜尋文章',
          parent: 'search-posts',
        });
      }),
    [posts, router]
  );

  useRegisterActions(actions.filter(Boolean) as Action[]);
};
