import {useRouter} from 'next/router';

import Layout from 'components/Layout';
import useData from 'hooks/useData';


function isString(planet: string | string[]): planet is string {
  return typeof planet === 'string';
}

const Planet = () => {
  const router = useRouter();
  const {planet} = router.query;
  const {planets} = useData();

  if (!planet) {
    return null;
  }

  if (!isString(planet)) {
    return null;
  }

  const planetData = planets[planet];

  if (!planetData) {
    return <h1>Planet not found.</h1>;;
  }

  const {description} = planetData;


  return (
    <Layout>
      <h1>{(planet as string).toUpperCase()}</h1>
      <p>{description}</p>
    </Layout>
  );
};

export default Planet;
