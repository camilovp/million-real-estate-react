
import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return <p className="text-center text-gray-500">No se encontraron propiedades.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
      {properties.map((property) => (
        <PropertyCard key={property.idProperty} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;