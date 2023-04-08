import { useEffect, useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from './localStorage';

const getPokemons = async (
  url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
) => {
  return fetch(url).then((res) => res.json());
};

function usePokemons() {
  const [data, setData] = useState(null);

  const handleData = async (url) => {
    const urlBroken = url.split('offset=');
    const offset = urlBroken[1].split('&limit')[0];
    const key = `pokemons${offset}_${Number(offset) + 20}`;
    try {
      const pokemons = getFromLocalStorage(key);
      setData(pokemons);
    } catch (e) {
      const pokemons = await getPokemons(url);
      setData(pokemons);
      setToLocalStorage(key, pokemons);
    }
  };

  useEffect(() => {
    let ignore = false;
    const loadData = async () => {
      const key = 'pokemons0_20';
      try {
        const pokemons = getFromLocalStorage(key);
        setData(pokemons);
      } catch (e) {
        const firstPokemons = await getPokemons();
        setData(firstPokemons);
        setToLocalStorage(key, firstPokemons);
      }
    };

    if (!ignore) {
      loadData();
    }
    return () => {
      ignore = true;
    };
  }, []);

  return [data, handleData];
}

export default usePokemons;
