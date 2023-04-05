import { useRegisterActions } from 'kbar';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { PostForCommandPalette } from './getCommandPalettePosts';

export const useCommandPalettePostActions = (
  posts: PostForCommandPalette[]
): void => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { t } = useTranslation(['common']);
  const changePath = (path: string) => {
    router.push({ pathname, query }, asPath, { locale: locale });
  };
  useRegisterActions(
    posts.map((post) => ({
      id: post.slug,
      name: post.title,
      perform: () => router.push(post.path),
      section: t('search-posts'),
      parent: 'search-posts',
    })),
    []
  );
};
