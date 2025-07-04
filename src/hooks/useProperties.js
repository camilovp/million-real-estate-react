import { useEffect, useState } from 'react';
import axios from 'axios';

const useProperties = (filters) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://localhost:7200/api/Properties/GetPropertyByFiltered', {
        params: {
          name: filters.name,
          address: filters.address,
          minPrice: filters.minPrice,
          maxPrice: filters.maxPrice
        }
      });
      setProperties(response.data);
    } catch (err) {
      setError('Error al obtener propiedades');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [filters]);

  return { properties, loading, error };
};

export default useProperties;