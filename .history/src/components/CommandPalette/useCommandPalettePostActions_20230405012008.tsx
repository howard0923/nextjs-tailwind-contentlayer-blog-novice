import { useMemo, useEffect } from 'react';
import { createAction, useRegisterActions, useUnregisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { PostForCommandPalette } from './getCommandPalettePosts';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const useCommandPalettePostActions = (
  posts: PostForCommandPalette[]
): void => {
  const router = useRouter();

  const actions = useMemo(
    () =>
      posts.map((post) =>
        createAction({
          id: post.slug,
          name: post.title,
          perform: () => router.push(post.path),
          section: '搜尋文章',
          parent: 'search-posts',
        })
      ),
    [posts, router]
  );

  // Register actions on mount and when the posts array changes
  useEffect(() => {
    const registeredActions = actions.filter(Boolean);
    useRegisterActions(registeredActions);

    // Unregister actions on unmount or when the posts array changes
    return () => {
      useUnregisterActions(registeredActions);
    };
  }, [actions]);
};
