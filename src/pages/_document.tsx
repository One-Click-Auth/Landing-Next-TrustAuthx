import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7NXTY5KCKL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7NXTY5KCKL');
        `}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
