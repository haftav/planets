import data from '../data.json';

interface PlanetData {
  planets: {
    [index: string]: {
      description: string;
    }
  }
}

export default function useData(): PlanetData  {
  return data;
}