import { Outlet } from 'react-router-dom'; // Importante!

function App() {
  return (
    <>
      {/* Aqui pode ter cabeçalho, footer, etc. */}
      <Outlet /> {/* Isso é obrigatório para exibir as rotas filhas */}
    </>
  );
}

export default App;
