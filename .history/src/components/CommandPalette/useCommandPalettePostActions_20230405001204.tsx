import { useMemo } from 'react';
import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { PostForCommandPalette } from './getCommandPalettePosts';

export const useCommandPalettePostActions = (
  posts: PostForCommandPalette[]
): void => {
  const router = useRouter();

  const actions = useMemo(
    () =>
      posts.map((post) => ({
        id: post.slug,
        name: post.title,
        perform: () => router.push(post.path),
        section: '搜尋文章',
      })),
    [posts, router]
  );

  useRegisterActions(actions, [actions]);
};