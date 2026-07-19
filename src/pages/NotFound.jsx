import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-content">
        <h1>404</h1>

        <h2>Página não encontrada</h2>

        <p>
          A página que você tentou acessar não existe.
        </p>

        <Link to="/" className="btn-primary">
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}

export default NotFound;