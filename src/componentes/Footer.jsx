import styled from '@emotion/styled';

const FooterPage = styled.footer`
  background-color: black;
`;
const Paragraph = styled.p`
  color: white;
  margin: 0;
  padding: 0;
`;

function Footer() {
  return (
    <FooterPage className="fixed-bottom">
      <div id="reconocimientos" className="text-center">
        <Paragraph>Creado por Juan Sebastián Ayala</Paragraph>
        <Paragraph>
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
        </Paragraph>
      </div>
    </FooterPage>
  );
}

export default Footer;
