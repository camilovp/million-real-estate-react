import React from 'react';
import PropertyImageGallery from './PropertyImageGallery';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <PropertyImageGallery images={property.images} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-gray-600">{property.address}</p>
        <p className="text-sky-700 font-bold mt-2">${property.price}</p>
        <Link to={`/property/${property.idProperty}`}>
            <button className="mt-4 bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded hover:bg-blue-700">
                Ver más
            </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
