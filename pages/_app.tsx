import {AppProps} from 'next/app';
import {AnimatePresence} from 'framer-motion';

import '../styles/globals.css';

function MyApp({Component, pageProps, router}: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
