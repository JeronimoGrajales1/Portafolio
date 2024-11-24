import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import Descripcion from './pages/descripcion/Descripcion';
import Habilidades from './pages/habilidades/Habilidades';
import Contacto from './pages/contacto/Contacto';

function App() {
  return (
    <BrowserRouter>
      <div className='main-screen' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='main' element={<Main />}/>
          <Route path='main' element={<Main />}/>
          <Route path='descripcion' element={<Descripcion />}/>
          <Route path='habilidades' element={<Habilidades />}/>
          <Route path='contacto' element={<Contacto />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
