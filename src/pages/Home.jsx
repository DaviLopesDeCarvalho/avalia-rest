import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantContext } from '../context/RestaurantContext';
import RestaurantCard from '../components/RestaurantCard';


export default function Home() {
  const { restaurants, isLoading } = useContext(RestaurantContext);

  const topRestaurantes = [...restaurants]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 3);

  return (
    <div className="home-container">
      
      <section className="hero-section">
        <div className="hero-content">
          <h1>Descubra os <span>Melhores Sabores</span> da Cidade</h1>
          <p>Explore, avalie e compartilhe suas experiências gastronômicas. A sua opinião guia milhares de pessoas aos melhores pratos.</p>
          <div className="hero-buttons">
            <Link to="/restaurantes" className="btn-primary">Explorar Restaurantes</Link>
            <Link to="/cadastro" className="btn-outline">Fazer uma Avaliação</Link>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <h2>Restaurantes em Destaque</h2>
        <div className="highlights-divider"></div>
        
        {isLoading ? (
          <p style={{ textAlign: 'center' }}>Carregando os melhores da cidade...</p>
        ) : topRestaurantes.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#718096' }}>Nenhuma avaliação cadastrada ainda. Seja o primeiro!</p>
        ) : (
          <div className="grid-cards">
            {topRestaurantes.map(rest => (
              <RestaurantCard key={rest.id} restaurant={rest} />
            ))}
          </div>
        )}
      </section>

    </div>
  );
}