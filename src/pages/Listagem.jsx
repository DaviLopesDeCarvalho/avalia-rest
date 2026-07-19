import { useContext, useState } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';
import RestaurantCard from '../components/RestaurantCard';

export default function Listagem() {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const [busca, setBusca] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');

  if (isLoading) return <div>Carregando catálogo de restaurantes...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  const restaurantesFiltrados = restaurants.filter(rest => {
    const matchBusca = rest.name.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = filtroCategoria === '' || rest.category === filtroCategoria;
    return matchBusca && matchCategoria;
  });

  return (
    <section>
      <h1 style={{ marginBottom: '1.5rem' }}>Restaurantes Avaliados</h1>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <input 
          type="text" 
          placeholder="Buscar restaurante..." 
          className="input-base"
          style={{ marginBottom: 0 }}
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <select 
          className="input-base"
          style={{ marginBottom: 0, width: '200px' }}
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="">Todas as Categorias</option>
          <option value="Carnes">Carnes</option>
          <option value="Hamburgueria">Hamburgueria</option>
          <option value="Japonesa">Japonesa</option>
        </select>
      </div>

      {restaurantesFiltrados.length === 0 ? (
        <p>Nenhum restaurante encontrado com os filtros selecionados.</p>
      ) : (
        <div className="grid-cards">
          {restaurantesFiltrados.map((rest) => (
            <RestaurantCard key={rest.id} restaurant={rest} />
          ))}
        </div>
      )}
    </section>
  );
}