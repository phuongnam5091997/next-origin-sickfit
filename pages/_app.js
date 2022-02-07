import Page from "../components/Page";
import nProgress from "nprogress";
import Router from "next/router";

import '../components/styles/nprocess.css';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />{" "}
    </Page>
  );
}

export default MyApp;
