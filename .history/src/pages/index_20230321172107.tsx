import type { NextPage } from 'next'; // NextPage 是 Next.js 框架中定義的一個泛型型別，表示一個 React 組件，通常用來表示一個網頁或應用程序的頁面。
import Head from 'next/head'; //於設置網頁的標題、元描述等頁面相關的信息。
import Image from 'next/image';

import { allPostsNewToOld, Post } from '@/lib/contentLayerAdapter';
import styles from '@/styles/Home.module.css';

export function getStaticProps() {
  const posts = allPostsNewToOld;
  return { props: { posts } }; //通過props屬性傳遞這些文章到Home組件中。
}

type Props = {
  posts: Post[]; //確保posts屬性包含的是Post數組。
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          {posts.map((post) => (
            <a key={post.slug} href={post.path} className={styles.card}>
              {/* 
                  post.path 在contentlayer.config.js 中產生
            */}
              <h2>{post.title}</h2>
              <p>{post.description}</p>ㄋ
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
