import {useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';

import Layout from 'components/Layout';
import useData from 'hooks/useData';
import useRouteSafeQuery from 'hooks/useRouteSafeQuery';

import styles from 'styles/Planet.module.scss';

function isString(planet: string | string[]): planet is string {
  return typeof planet === 'string';
}

const Planet = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const planet = useRouteSafeQuery('planet');
  const {planets} = useData();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (!planet) {
    return null;
  }

  if (!isString(planet)) {
    return null;
  }

  const planetData = planets[planet];

  if (!planetData) {
    return <h1>Planet not found.</h1>;
  }

  const {description} = planetData;

  return (
    <motion.div
      exit={{opacity: 0}}
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
    >
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.flexRight}>
            <motion.div
              className={styles.imageWrapper}
              initial={false}
              animate={{
                opacity: imageLoaded ? 1 : 0,
                scale: imageLoaded ? 1 : 0.8,
              }}
              transition={{type: 'tween', duration: 1.2}}
            >
              <Image
                onLoad={handleImageLoad}
                src="/planet.png"
                alt="Picture of the author"
                width={300}
                height={300}
                quality="50%"
              />
            </motion.div>
          </div>
          <h1>{planet.toUpperCase()}</h1>
          <p>{description}</p>
        </div>
      </Layout>
    </motion.div>
  );
};

export default Planet;
