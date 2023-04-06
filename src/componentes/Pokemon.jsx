import styled from '@emotion/styled';
import usePokemon from './servicios/usePokemon';
import Caracteristicas from './Caracteristicas';
import { useParams } from 'react-router-dom';

const Contenedor = styled.div`
  background-color: #ffe033;
  border: 1px solid black;
  border-radius: 20px;
  width: 60%;
  margin: 20px auto;
  text-align: center;
`;

const Titulo = styled.h1`
  font-size: 60px;
`;

const Imagen = styled.img`
  width: 30%;
`;

const Texto = styled.p`
  font-size: 20px;
  text-align: center;
`;

function Pokemon() {
  const param = useParams();
  const pokemon = usePokemon(param.nombrePokemon);

  return pokemon ? (
    <Contenedor>
      <Titulo>{pokemon.name}</Titulo>
      <Imagen
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt="Foto Pokemon"
      />
      <Caracteristicas pokemon={pokemon} />
    </Contenedor>
  ) : (
    <Texto>Loading...</Texto>
  );
}

export default Pokemon;
