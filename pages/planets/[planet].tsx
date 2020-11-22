import {useState} from 'react';
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';

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
      key={`planet-wrapper-${planet}`}
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
            <AnimatePresence>
              <motion.div
                key={`planet-${planet}`}
                className={styles.imageWrapper}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: imageLoaded ? 1 : 0,
                  scale: imageLoaded ? 1 : 0.8,
                  transition: {
                    duration: 0.8,
                  },
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
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
            </AnimatePresence>
          </div>
          <h1>{planet.toUpperCase()}</h1>
          <p>{description}</p>
        </div>
      </Layout>
    </motion.div>
  );
};

export default Planet;
