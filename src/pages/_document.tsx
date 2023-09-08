/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="RMTech" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rmtech.id" />
        <meta property="og:image" content="https://www.rmtech.id/og.png" />
        <meta property="og:description" content="Generate solutions for various limitations" />

        <meta name="twitter:title" content="RMTech" />
        <meta name="twitter:description" content="Generate solutions for various limitations" />
        <meta name="twitter:image" content="https://www.rmtech.id/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
              
        <link rel="shortcut icon" href="/png/favicon.png" type="image/x-icon"></link>

        <title>RMTech</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
