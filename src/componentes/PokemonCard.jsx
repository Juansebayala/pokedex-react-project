import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Card = styled.div`
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

const Image = styled.img`
  width: 100%;
`;

const Name = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: black;
`;

function PokemonCard({ image, name }) {
  return (
    <Card className="pokemon-card">
      <Link to={`/pokemon/${name}`} style={{ textDecoration: 'none' }}>
        <Image src={image} />
        <Name>{name}</Name>
      </Link>
    </Card>
  );
}

export default PokemonCard;
