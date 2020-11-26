import {useContext} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {motion} from 'framer-motion';

import Orbiter from 'components/Orbiter';
import Sun from 'components/Sun';
import {StyleContext} from './_app';

// import styles from 'styles/Home.module.scss';

const Home = () => {
  const {homeStyles: styles} = useContext(StyleContext);

  // keeping markup here in case I add back in later
  const ImageMarkup = (
    <div className={styles.imageContainer}>
      <Image className={styles.bgImage} layout="fill" src="/stars-1.jpg" />
    </div>
  );

  return (
    <motion.div exit={{opacity: 0}} animate={{opacity: 1}} initial={{opacity: 0}}>
      <Head>
        <title>Planets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main>
          <h1>SOLAR SYSTEM</h1>
          <div className={styles.planets}>
            <Orbiter
              size="90%"
              animationDuration="60s"
              bgColor="mediumslateblue"
              link="/planets/neptune"
            />
            <Orbiter size="80%" animationDuration="43s" bgColor="skyblue" link="/planets/uranus" />
            <Orbiter size="70%" animationDuration="80s" bgColor="magenta" link="/planets/saturn" />
            <Orbiter size="60%" animationDuration="40s" bgColor="orange" link="/planets/jupiter" />
            <Orbiter
              size="50%"
              animationDuration="30s"
              bgColor="mediumpurple"
              link="/planets/mars"
            />
            <Orbiter size="40%" animationDuration="25s" bgColor="palegreen" link="/planets/earth" />
            <Orbiter size="30%" animationDuration="35s" bgColor="peru" link="/planets/venus" />
            <Orbiter
              size="20%"
              animationDuration="15s"
              bgColor="lightcoral"
              link="/planets/mercury"
            />
            <Sun />
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default Home;
