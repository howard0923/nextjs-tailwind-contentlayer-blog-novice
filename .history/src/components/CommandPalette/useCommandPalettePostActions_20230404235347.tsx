import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { PostForCommandPalette } from './getCommandPalettePosts';
import { useState, useMemo } from 'react';
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
};
const templateActions = useMemo(() => {
  const actions = [] as Action[];

  actions.push({
    id: 'blank-draft',
    name: 'Blank draft',
    section: 'New',
    parent: 'new-template',
    keywords: 'new doc draft',
    perform: () => router.push('/edit/'),
    priority: 1,
  });
  return actions;
}, [me, router]);

useRegisterActions(templateActions, [templateActions]);