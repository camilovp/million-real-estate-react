
import React, { useState } from 'react';
import Header from '../../../components/Header';
import useProperties from '../../../hooks/useProperties';
import PropertyFilters from '../components/PropertyFilters';
import PropertyList from '../components/PropertyList';

const HomePage = () => {
  const [filters, setFilters] = useState({
    name: '',
    address: '',
    minPrice: '',
    maxPrice: ''
  });

  const { properties, loading, error } = useProperties(filters);

  const handleFilter = (filterData) => {
    setFilters(filterData);
  };

  return (
    <div>
      <Header />
      <main className="p-4 max-w-7xl mx-auto">
        <PropertyFilters onFilter={handleFilter} />

        {loading && <p className="text-center text-gray-500">Cargando propiedades...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && <PropertyList properties={properties} />}
      </main>
    </div>
  );
};

export default HomePage;
