import styled from '@emotion/styled';

const Enlace = styled.li`
  background-color: #ffe033;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
  }
`;

function TiposPokemones() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div
        class="collapse navbar-collapse d-flex justify-content-center"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav align-content-around justify-content-center gap-2 flex-wrap tipos-pokemones">
          <Enlace class="nav-item">Todos</Enlace>
          <Enlace class="nav-item">Normal</Enlace>
          <Enlace class="nav-item">Fighting</Enlace>
          <Enlace class="nav-item">Flying</Enlace>
          <Enlace class="nav-item">Poison</Enlace>
          <Enlace class="nav-item">Ground</Enlace>
          <Enlace class="nav-item">Rock</Enlace>
          <Enlace class="nav-item">Bug</Enlace>
          <Enlace class="nav-item">Ghost</Enlace>
          <Enlace class="nav-item">Steel</Enlace>
          <Enlace class="nav-item">Fire</Enlace>
          <Enlace class="nav-item">Water</Enlace>
          <Enlace class="nav-item">Grass</Enlace>
          <Enlace class="nav-item">Electric</Enlace>
          <Enlace class="nav-item">Psychic</Enlace>
          <Enlace class="nav-item">Ice</Enlace>
          <Enlace class="nav-item">Dragon</Enlace>
          <Enlace class="nav-item">Dark</Enlace>
          <Enlace class="nav-item">Fairy</Enlace>
        </ul>
      </div>
    </nav>
  );
}

export default TiposPokemones;
