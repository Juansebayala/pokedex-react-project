import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Tarjeta = styled.div`
  background-color: #ffe033;
  display: inline-block;
  width: 15%;
  text-align: center;
  border: 1px solid black;
  border-radius: 6%;
  padding: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  }
`;

const Imagen = styled.img`
  width: 100%;
`;

const Nombre = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: black;
`;

function TarjetaPokemon({ imagen, nombre }) {
  return (
    <Tarjeta>
      <Link to={`/pokemon/${nombre}`} style={{ textDecoration: 'none' }}>
        <Imagen src={imagen} />
        <Nombre>{nombre}</Nombre>
      </Link>
    </Tarjeta>
  );
}

export default TarjetaPokemon;
