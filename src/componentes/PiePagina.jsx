import styled from '@emotion/styled';

const Footer = styled.footer`
  background-color: black;
`;
const Parrafo = styled.p`
  color: white;
  margin: 0;
  padding: 0;
`;

function PiePagina() {
  return (
    <Footer className="fixed-bottom">
      <div id="reconocimientos" className="text-center">
        <Parrafo>Creado por Juan Sebastián Ayala</Parrafo>
        <Parrafo>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/cf5VAHkQsmvA/pokeball"
          >
            Pokeball
          </a>{' '}
          icon by{' '}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
        </Parrafo>
      </div>
    </Footer>
  );
}

export default PiePagina;
