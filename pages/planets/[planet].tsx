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

  let imageClass = styles.image;

  if (imageLoaded) {
    imageClass += ` ${styles.imageLoaded}`;
  }

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
          <Image
            onLoad={handleImageLoad}
            src="/planet.png"
            alt="Picture of the author"
            width={200}
            height={200}
            quality="50%"
            className={imageClass}
          />
          <h1>{planet.toUpperCase()}</h1>
          <p>{description}</p>
        </div>
      </Layout>
    </motion.div>
  );
};

export default Planet;
