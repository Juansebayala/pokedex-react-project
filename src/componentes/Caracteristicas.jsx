import styled from '@emotion/styled';

const ContenedorStats = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const TituloStat = styled.p`
  font-weight: bold;
  font-size: 26px;
  text-align: left;
  vertical-align: top;
`;

const Stat = styled.p`
  font-size: 20px;
  line-height: 15px;
  text-align: right;
`;

function Caracteristicas({ pokemon }) {
  return (
    <ContenedorStats>
      <div className="d-flex justify-content-between">
        <TituloStat>Tipo:</TituloStat>
        <div>
          {pokemon.types.map((tipo) => {
            return <Stat>{tipo.type.name}</Stat>;
          })}
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <TituloStat>Especie:</TituloStat>
        <div>
          <Stat>{pokemon.species.name}</Stat>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <TituloStat>Habilidades:</TituloStat>
        <div>
          {pokemon.abilities.map((habilidad) => {
            return <Stat>{habilidad.ability.name}</Stat>;
          })}
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <TituloStat>Formas:</TituloStat>
        <div>
          {pokemon.forms.map((forma) => {
            return <Stat>{forma.name}</Stat>;
          })}
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <TituloStat>Movimientos:</TituloStat>
        <div>
          {pokemon.moves.map((movimiento) => {
            return <Stat>{movimiento.move.name}</Stat>;
          })}
        </div>
      </div>
    </ContenedorStats>
  );
}

export default Caracteristicas;
