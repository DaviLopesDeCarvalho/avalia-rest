import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RestaurantProvider } from './context/RestaurantContext';
import Navbar from './components/Navbar';
import './styles/global.css'
import Home from './pages/Home';
import Listagem from './pages/Listagem';
import Cadastro from './pages/Cadastro';


export default function App() {
  return (
    <RestaurantProvider>
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurantes" element={<Listagem />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>
      </BrowserRouter>
    </RestaurantProvider>
  );
}