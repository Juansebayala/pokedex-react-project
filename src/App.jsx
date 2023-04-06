import styled from '@emotion/styled';
import Pokemones from './componentes/Pokemones';
import Pokemon from './componentes/Pokemon';
import PiePagina from './componentes/PiePagina';
import imagenFondo from './img/fondo.jpg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Main = styled.main`
  padding-bottom: 80px;
  min-height: 100vh;
  background-image: url(${imagenFondo});
  background-size: cover;
  background-attachment: fixed;
  background-position: 0% 110%;
`;

const Titulo = styled.h1`
  font-family: 'Pokemon Solid', sans-serif;
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pokemones />,
  },
  {
    path: '/pokemon/:nombrePokemon',
    element: <Pokemon />,
  },
]);

function App() {
  return (
    <div className="App">
      <Main>
        <Titulo className="text-center">Pokedex</Titulo>
        <RouterProvider router={router} />
        <PiePagina />
      </Main>
    </div>
  );
}

export default App;
