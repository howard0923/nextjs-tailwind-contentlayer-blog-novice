import { format, parseISO } from 'date-fns';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts, Post } from '@/lib/contentLayerAdapter';

//getStaticPaths 事先定義哪些頁面需要產生 HTML 檔案。
export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map((post) => post.path); //paths属性是一个数组，包含所有文章的路径信息
  return {
    paths,
    fallback: false, //fallback属性是一个布尔值，表示是否在请求一个不存在的路由时返回404页面
  };
};
//
export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);
  //params contains the route parameters for pages using dynamic routes. For example, if the page name is [id].js , then params will look like { id: ... }
  //The getStaticProps() function can also accept a context object. This object is provided by NextJS itself.
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
  };
};

type Props = {
  post: Post;
};

const PostPage: NextPage<Props> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{post.title}</h1>

        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLLL d, yyyy')} ..
        </time>
        <MDXContent />
      </main>
    </div>
  );
};

export default PostPage;
