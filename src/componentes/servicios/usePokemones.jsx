import { useEffect, useState } from 'react';

function usePokemones() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;
    const loadData = async () => {
      const promises = [...new Array(20)].map((_, index) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`).then(
          (res) => res.json()
        );
      });

      const pokemones = await Promise.all(promises);

      setData(pokemones);
    };

    if (!ignore) {
      loadData();
    }
    return () => {
      ignore = true;
    };
  }, []);
  return data;
}

export default usePokemones;
