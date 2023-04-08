import Pagination from './Pagination';
import usePokemons from './servicios/usePokemons';
import PokemonCard from './PokemonCard';

function Pokemons() {
  const [pokemons, setPokemons] = usePokemons();

  const eventPrev = () => {
    pokemons.previous !== null && setPokemons(pokemons.previous);
  };

  const eventNext = () => {
    pokemons.next !== null && setPokemons(pokemons.next);
  };

  return (
    <>
      {pokemons ? (
        <>
          <div className="d-flex justify-content-center">
            <Pagination eventPrev={eventPrev} eventNext={eventNext} />
          </div>
          <div
            id="pokemones"
            className="d-flex align-content-around justify-content-center flex-wrap gap-3"
          >
            {pokemons.results.map((pokemon) => {
              const urlPokemon = pokemon.url;
              const pokemonID = urlPokemon.split('/')[6];
              const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`;
              const name = pokemon.name;
              return (
                <PokemonCard
                  key={pokemonID}
                  image={image}
                  name={name}
                ></PokemonCard>
              );
            })}
          </div>
        </>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </>
  );
}

export default Pokemons;
