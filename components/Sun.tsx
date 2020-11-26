import {useContext} from 'react';

import {StyleContext} from '../pages/_app';
// import styles from 'styles/Sun.module.scss';

const Sun = () => {
  const {sunStyles: styles} = useContext(StyleContext);
  return (
    <div className={styles.sun}></div>
  )
};

export default Sun;
