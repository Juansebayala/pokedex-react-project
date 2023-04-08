import { useEffect, useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from './localStorage';

function usePokemon(nombre) {
  const [data, setData] = useState();

  useEffect(() => {
    const ignore = false;

    const loadData = () => {
      const key = `pokemon_${nombre}`;
      try {
        const pokemon = getFromLocalStorage(key);
        setData(pokemon);
      } catch (e) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
          .then((respuesta) => respuesta.json())
          .then((pokemon) => {
            setData(pokemon);
            setToLocalStorage(key, pokemon);
          });
      }
    };

    if (!ignore) {
      loadData();
    }

    return () => {
      ignore;
    };
  }, []);

  return data;
}

export default usePokemon;
