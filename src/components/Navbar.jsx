import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-logo">AvaliaRest</div>
      <nav className="navbar-links">
        <Link to="/">Início</Link>
        <Link to="/restaurantes">Listagem</Link>
        <Link to="/cadastro" className="btn-primary">Avaliar Novo</Link>
      </nav>
    </header>
  );
}