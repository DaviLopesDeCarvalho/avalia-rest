import { useContext } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';
import RestaurantCard from '../components/ui/RestaurantCard';

export default function Listagem() {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);

  if (isLoading) return <div>Carregando catálogo de restaurantes...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <section>
      <h1 style={{ marginBottom: '2rem' }}>Restaurantes Avaliados</h1>
      <div className="grid-cards">
        {restaurants.map((rest) => (
          <RestaurantCard key={rest.id} restaurant={rest} />
        ))}
      </div>
    </section>
  );
}