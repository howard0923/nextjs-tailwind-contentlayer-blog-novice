import { useMemo, useEffect } from 'react';
import { createAction, useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { PostForCommandPalette } from './getCommandPalettePosts';
import { type Action } from 'kbar';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const useCommandPalettePostActions = (
  posts: PostForCommandPalette[]
): void => {
  const router = useRouter();

  useEffect(() => {
    const actions = posts.map((post) =>
      createAction({
        name: post.title,
        perform: () => router.push(post.path),
        section: '搜尋文章',
        parent: 'search-posts',
      })
    );

    useRegisterActions(actions.filter(Boolean) as Action[]);
  }, [posts, router]);
};
