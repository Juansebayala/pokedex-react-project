import styled from '@emotion/styled';

const ContainerStats = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-bottom: 15px;
`;

const Subtitle = styled.h2`
  margin-top: 20px;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
`;

const TitleStat = styled.p`
  font-weight: bold;
  font-size: 26px;
  text-align: left;
`;

const Stat = styled.p`
  font-size: 20px;
  line-height: 15px;
  text-align: right;
  margin-top: 12px;
`;

function Characteristics({ pokemon }) {
  return (
    <ContainerStats>
      <Subtitle>Characteristics</Subtitle>
      <hr />
      <div className="d-flex justify-content-between">
        <TitleStat>Type:</TitleStat>
        <div>
          {pokemon.types.map((type) => {
            return <Stat key={type.type.name}>{type.type.name}</Stat>;
          })}
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <TitleStat>Specie:</TitleStat>
        <div>
          <Stat>{pokemon.species.name}</Stat>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <TitleStat>Abilities:</TitleStat>
        <div>
          {pokemon.abilities.map((ability) => {
            return (
              <Stat key={ability.ability.name}>{ability.ability.name}</Stat>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <TitleStat>Forms:</TitleStat>
        <div>
          {pokemon.forms.map((form) => {
            return <Stat key={form.name}>{form.name}</Stat>;
          })}
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <TitleStat>Skills:</TitleStat>
        <div>
          {pokemon.moves.map((skill) => {
            return <Stat key={skill.move.name}>{skill.move.name}</Stat>;
          })}
        </div>
      </div>
    </ContainerStats>
  );
}

export default Characteristics;
