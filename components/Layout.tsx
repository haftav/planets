import styles from 'styles/Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
