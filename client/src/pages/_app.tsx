import type { AppProps } from "next/app";
// import "normalize.css/normalize.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
