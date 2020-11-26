import {useContext} from 'react';

import {StyleContext} from '../pages/_app';
// import styles from 'styles/Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  const {layoutStyles: styles} = useContext(StyleContext);
  return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
