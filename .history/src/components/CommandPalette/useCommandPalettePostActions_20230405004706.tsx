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
        parent: 'search-posts',
      })),
    [posts, router]
  );
  const childActions = useMemo(
    () =>
      articles.map((article: Articles) =>
        createAction({
          name: article.title,
          keywords: article.description,
          parent: 'Articles',
          section: 'Articles',
          icon: <NewspaperIcon className="h-5 w-5" />,
          perform: () => {
            router.push(`/articles/${article.slug}`);
          },
        })
      ),
    [articles]
  );

  useRegisterActions(actions, [actions]);
};
