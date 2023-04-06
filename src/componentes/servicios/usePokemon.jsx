import { useEffect, useState } from 'react';

function usePokemon(nombre) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then((respuesta) => respuesta.json())
      .then((pokemon) => setData(pokemon));
  }, []);

  return data;
}

export default usePokemon;
