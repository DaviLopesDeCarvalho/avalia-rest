/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';

export const RestaurantContext = createContext({});

export function RestaurantProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRestaurants = useCallback(async () => {

    try {
      const response = await api.get('/restaurants');
      setRestaurants(response.data);
      setError(null);
    } catch (err) {
      setError('Falha ao conectar com o servidor. Verifique se o JSON Server está rodando.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    let isMounted = true; 

    const carregarDadosIniciais = async () => {
      if (isMounted) {
        await fetchRestaurants();
      }
    };

    carregarDadosIniciais();
    return () => {
      isMounted = false;
    };
  }, [fetchRestaurants]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error, fetchRestaurants }}>
      {children}
    </RestaurantContext.Provider>
  );
}