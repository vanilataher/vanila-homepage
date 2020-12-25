import Head from 'next/head';
import '../styles/globals.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Florida Web Design, Web &amp; Mobile App Development - Vanila.io
        </title>
        <link rel="icon" href="/img/favicon-1.webp" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Florida Web & mobile development and design agency for IOS, Android using latest technology . Our company is providing with SEO and Social "
        />
        <meta name="author" content="Vanila" />
        <meta httpEquiv="Cache-control" content="public" />
        <meta property="og:image" content="/img/vanila-og.webp" />
        <meta
          property="og:title"
          content="Vanila - Mobile & Web development, Design, SEO"
        />
        <meta property="og:url" content="https://vanila.io" />
        <meta property="og:site_name" content="Vanila Team" />
        <meta
          property="og:description"
          content="Vanila is team who is specialized in front and backend development, seo and marketing."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://vanila.io" />
        <meta
          name="twitter:title"
          content="Vanila - Mobile & Web development, Design, SEO"
        />
        <meta
          name="twitter:description"
          content="Vanila is team who is specialized in front and backend development, seo and marketing."
        />
        <meta name="twitter:image" content="/img/vanila-og.webp" />
        <link
          rel="preload"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
          href="https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
