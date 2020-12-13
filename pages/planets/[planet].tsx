import {useState, useContext, useEffect, useRef} from 'react';
import {GetServerSideProps, GetStaticProps} from 'next';
import Image from 'next/image';
import {motion} from 'framer-motion';

import Layout from 'components/Layout';
import useData from 'hooks/useData';
import planetData from '../../data.json';
import {StyleContext} from '../_app';

// import styles from 'styles/Planet.module.scss';

function isString(planet: string | string[] | undefined): planet is string {
  return typeof planet === 'string';
}

interface PlanetProps {
  planet: string;
}

const Planet = ({planet}: PlanetProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const {planetStyles: styles} = useContext(StyleContext);

  const [imageLoaded, setImageLoaded] = useState(false);

  const {planets} = useData();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (!planet) {
    return <h1>Planet not found.</h1>;
  }

  const planetData = planets[planet];

  if (!planetData) {
    return <h1>Planet not found.</h1>;
  }

  const {description} = planetData;

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Layout>
        <div className={styles.wrapper}>
          <div className={styles.flexRight}>
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
                src={`/${planet}.png`}
                alt={`Picture of ${planet}`}
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

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on planet data
  const {planets} = planetData;

  const paths = Object.keys(planets).map((key) => ({
    params: {planet: key},
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async ({params = {}}) => {
  const planet = isString(params.planet) ? params.planet : undefined;
  return {
    props: {
      planet,
    },
  };
};

export default Planet;
