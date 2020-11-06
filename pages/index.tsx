import Head from 'next/head';

import Orbiter from 'components/Orbiter';
import Sun from 'components/Sun';

import styles from 'styles/Home.module.scss';

const OrbitMarkup = (
  <div className={styles.orbit}>
    <div className={styles.planetContainer}>
      <div className={styles.planet} />
    </div>
  </div>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Orbiter animationDuration="90s" bgColor="tan" />
        <Orbiter size="90%" animationDuration="60s" bgColor="mediumslateblue" />
        <Orbiter size="80%" animationDuration="43s" bgColor="skyblue" />
        <Orbiter size="70%" animationDuration="80s" bgColor="magenta" />
        <Orbiter size="60%" animationDuration="40s" bgColor="orange" />
        <Orbiter size="50%" animationDuration="30s" bgColor="mediumpurple" />
        <Orbiter size="40%" animationDuration="25s" bgColor="palegreen" />
        <Orbiter size="30%" animationDuration="35s" bgColor="peru" />
        <Orbiter size="20%" animationDuration="15s" bgColor="lightcoral" />
        <Sun />
      </main>
    </div>
  );
}
