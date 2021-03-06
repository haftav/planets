import {useContext} from 'react';
import Link from 'next/link';

import {StyleContext} from '../pages/_app';
// import styles from 'styles/Orbiter.module.scss';

interface OrbiterProps {
  size?: number | string;
  bgColor?: string;
  animationDuration?: string;
  link: string;
  position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const Orbiter = ({
  size = '100%',
  bgColor = 'white',
  animationDuration = '100s',
  link,
  position = 1,
}: OrbiterProps) => {
  const {orbiterStyles: styles} = useContext(StyleContext);
  return (
    <div
      className={styles.wrapper}
      style={{
        width: size,
        height: size,
      }}
    >
      <Link href={link} scroll={false}>
        <a className={styles.innerWrapper}>
          <div className={styles.svgWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <circle
                cx="50%"
                cy="50%"
                r="49%"
                fill="transparent"
                stroke="#818181"
                strokeWidth="1"
                strokeDasharray="3 2"
              />
            </svg>
          </div>
          <div
            className={`${styles.orbitalBodyContainer} orbitalNumber${position}`}
            style={{
              animationDuration,
            }}
          >
            <div
              className={styles.orbitalBody}
              style={{
                backgroundColor: bgColor,
              }}
            />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Orbiter;
