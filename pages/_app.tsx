import {createContext} from 'react';
import {AppProps} from 'next/app';
import {AnimatePresence} from 'framer-motion';

import homeStyles from 'styles/Home.module.scss';
import layoutStyles from 'styles/Layout.module.scss';
import orbiterStyles from 'styles/Orbiter.module.scss';
import planetStyles from 'styles/Planet.module.scss';
import sunStyles from 'styles/Sun.module.scss';
import '../styles/globals.css';

interface StyleContext {
  [key: string]: {
    readonly [key: string]: string;
  };
}

// CSS modules are currently removed too early on route changes in production build.
// Passing down explicitly through context until issue is resolved (https://github.com/vercel/next.js/issues/17464)
export const StyleContext = createContext<StyleContext>({});

function MyApp({Component, pageProps, router}: AppProps) {
  const styles = {
    homeStyles,
    layoutStyles,
    orbiterStyles,
    planetStyles,
    sunStyles,
  };

  return (
    <StyleContext.Provider value={styles}>
      <AnimatePresence exitBeforeEnter>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </StyleContext.Provider>
  );
}

export default MyApp;
