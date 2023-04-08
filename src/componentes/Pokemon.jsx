import Button from './Button';
import styled from '@emotion/styled';
import usePokemon from './servicios/usePokemon';
import Characteristics from './Characteristics';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: #ffe033;
  border: 1px solid black;
  border-radius: 20px;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Image = styled.img`
  width: 30%;
`;

const Text = styled.p`
  font-size: 20px;
  text-align: center;
`;

function Pokemon() {
  const param = useParams();
  const pokemon = usePokemon(param.pokemonName);

  return pokemon ? (
    <>
      <div className="d-flex justify-content-center">
        <Link to="/">
          <Button children="Back home" />
        </Link>
      </div>
      <Container>
        <Title>{pokemon.name}</Title>
        <Image
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt="Foto Pokemon"
        />
        <Characteristics pokemon={pokemon} />
      </Container>
    </>
  ) : (
    <Text>Loading...</Text>
  );
}

export default Pokemon;
