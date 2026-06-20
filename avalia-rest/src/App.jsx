import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RestaurantProvider } from './context/RestaurantContext';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <RestaurantProvider>
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<h1>Bem-vindo ao AvaliaRest</h1>} />
            <Route path="/restaurantes" element={<h1>Listagem (Em breve)</h1>} />
            <Route path="/cadastro" element={<h1>Cadastro (Em breve)</h1>} />
          </Routes>
        </main>
      </BrowserRouter>
    </RestaurantProvider>
  );
}