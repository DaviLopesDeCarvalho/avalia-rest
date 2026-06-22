import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { api } from '../services/api';
import { useContext } from 'react';
import { RestaurantContext } from '../context/RestaurantContext';
import { useNavigate } from 'react-router-dom';

const schemaValidacao = z.object({
  name: z.string().min(3, 'Mínimo de 3 caracteres.'),
  category: z.string().min(1, 'Selecione uma categoria.'),
  rating: z.coerce.number().min(1, 'Mínimo 1').max(5, 'Máximo 5'),
  imageUrl: z.string().url('Insira uma URL válida.')
});

export default function Cadastro() {
  const { fetchRestaurants } = useContext(RestaurantContext);
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schemaValidacao)
  });

  const onSubmit = async (dados) => {
    try {
      await api.post('/restaurants', dados);
      await fetchRestaurants(); // Sicroniza API -> Contexto
      navigate('/restaurantes'); // Redirecionamento SPA
    } catch (error) {
      alert('Falha na comunicação com o servidor local.');
    }
  };

  return (
    <section style={{ maxWidth: '500px', margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: '8px' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Nova Avaliação</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Nome</label>
        <input className="input-base" {...register('name')} />
        {errors.name && <span style={{ color: 'red', fontSize: '0.8rem', marginBottom: '1rem' }}>{errors.name.message}</span>}

        <label>Categoria</label>
        <select className="input-base" {...register('category')}>
          <option value="">Selecione...</option>
          <option value="Carnes">Carnes</option>
          <option value="Hamburgueria">Hamburgueria</option>
          <option value="Japonesa">Japonesa</option>
        </select>
        {errors.category && <span style={{ color: 'red', fontSize: '0.8rem', marginBottom: '1rem' }}>{errors.category.message}</span>}

        <label>Nota (1 a 5)</label>
        <input type="number" step="0.1" className="input-base" {...register('rating')} />
        {errors.rating && <span style={{ color: 'red', fontSize: '0.8rem', marginBottom: '1rem' }}>{errors.rating.message}</span>}

        <label>URL da Imagem</label>
        <input className="input-base" {...register('imageUrl')} />
        {errors.imageUrl && <span style={{ color: 'red', fontSize: '0.8rem', marginBottom: '1rem' }}>{errors.imageUrl.message}</span>}

        <button type="submit" className="btn-primary" disabled={isSubmitting} style={{ marginTop: '1rem' }}>
          {isSubmitting ? 'Registrando...' : 'Salvar Avaliação'}
        </button>
      </form>
    </section>
  );
}