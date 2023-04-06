import { useEffect } from 'react';
import usePokemones from './servicios/usePokemones';
import TarjetaPokemon from './TarjetaPokemon';
import TiposPokemones from './TiposPokemones';

function Pokemones() {
  const pokemones = usePokemones();

  const agregarPokemones = () => {
    const pokemonn = usePokemones();
  };

  agregarPokemones();

  return (
    <>
      <TiposPokemones />
      <div
        id="pokemones"
        className="d-flex align-content-around justify-content-center flex-wrap gap-3"
        data-tipo="todos"
      >
        {pokemones?.map((pokemon) => {
          const imagen =
            pokemon.sprites.other['official-artwork'].front_default;
          const nombre = pokemon.name;
          return (
            <TarjetaPokemon imagen={imagen} nombre={nombre}></TarjetaPokemon>
          );
        })}
      </div>
    </>
  );
}

export default Pokemones;
