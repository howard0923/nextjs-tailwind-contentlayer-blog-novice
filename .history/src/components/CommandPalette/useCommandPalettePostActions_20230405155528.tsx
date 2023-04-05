import { useMemo } from 'react';
import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { type Action } from 'kbar';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PostForCommandPalette } from './getCommandPalettePosts';

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
    section: 'search-posts',
  };
  const { t } = useTranslation(['common']);
  const actions = useMemo(
    () =>
      posts.map((post) => ({
        id: post.slug,
        name: post.title,
        perform: () => router.push(post.path),
        section: t('search-posts'),
        parent: 'search-posts',
      })),
    [posts, router]
  );

  useRegisterActions([rootActions, ...actions].filter(Boolean) as Action[]);
};
