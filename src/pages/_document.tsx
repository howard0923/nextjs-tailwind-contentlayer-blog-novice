import { Head, Html, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="google-site-verification"
          content="UMtHN4J7jBTwMXYt7-tDZlBLaupqDytaRV_uBKHEIyY"
        />
      </Head>
      <body className="overflow-x-hidden bg-white text-black antialiased transition-colors dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
