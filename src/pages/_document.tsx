import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="Spotify Friend Activity" />
        <meta
          name="description"
          content="See what your friends are listening to on Spotify."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotiwebfren.vercel.app/" />
        <meta property="og:title" content="Spotify Friend Activity" />
        <meta
          name="google-site-verification"
          content="zyFhAv2rGzl_VRzgh3UcyQVuomxX4Rit3OkB9QETx3I"
        />
        <meta
          property="og:description"
          content="See what your friends are listening to on Spotify."
        />
        <meta
          property="og:image"
          content="https://spotiwebfren.vercel.app/360.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://spotiwebfren.vercel.app/"
        />
        <meta property="twitter:title" content="Spotify Friend Activity" />
        <meta
          property="twitter:description"
          content="See what your friends are listening to on Spotify."
        />
        <meta
          property="twitter:image"
          content="https://spotiwebfren.vercel.app/360.png"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
