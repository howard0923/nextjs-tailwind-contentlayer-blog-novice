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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L4X2G0ZT2Q"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L4X2G0ZT2Q');
        </script>
      </Head>
      <body className="overflow-x-hidden bg-white text-black antialiased transition-colors dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
