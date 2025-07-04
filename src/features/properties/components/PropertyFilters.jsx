import React, { useState } from 'react';

const PropertyFilters = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ name, address, minPrice, maxPrice });
    setShowFilters(false);
  };

  return (
    <div className="w-full">
      <div className="sm:hidden mb-4 flex justify-end">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-gray-600 border border-gray-300 px-3 py-2 rounded"
        >
          ☰ Filtros
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`${
          showFilters ? 'grid' : 'hidden'
        } sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white p-4 rounded shadow-md mb-6`}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Precio mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <div className="sm:col-span-2 md:col-span-4 flex justify-end">
          <button
            type="submit"
            className="bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded w-full sm:w-auto"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFilters;
