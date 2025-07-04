
import { useEffect, useState } from 'react';
import axios from 'axios';

const usePropertyById = (id) => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://localhost:7200/api/Properties/GetPropertyById/${id}`);
        setProperty(response.data);
      } catch (err) {
        setError('No se pudo cargar la propiedad');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  return { property, loading, error };
};

export default usePropertyById;
