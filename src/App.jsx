import styled from '@emotion/styled';
import Pokemons from './componentes/Pokemons';
import Pokemon from './componentes/Pokemon';
import Footer from './componentes/Footer';
import backgroundImage from './img/background-image.jpg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Main = styled.main`
  padding-bottom: 80px;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: 0% 110%;
`;

const Title = styled.h1`
  font-family: 'Pokemon Solid', sans-serif;
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pokemons />,
  },
  {
    path: '/pokemon/:pokemonName',
    element: <Pokemon />,
  },
]);

function App() {
  return (
    <div className="App">
      <Main>
        <Title className="text-center">Pokedex</Title>
        <RouterProvider router={router} />
        <Footer />
      </Main>
    </div>
  );
}

export default App;
