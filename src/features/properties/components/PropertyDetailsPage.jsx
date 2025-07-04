
import React from 'react';
import { useParams } from 'react-router-dom';
import usePropertyById from '../../../hooks/usePropertyById';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const { property, loading, error } = usePropertyById(id);

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!property) return null;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
      <p className="text-gray-600">{property.address}</p>
      <p className="text-lg font-semibold text-blue-600 mt-2">$ {property.price}</p>
      <p className="text-sm text-gray-500">Año: {property.year} | Código interno: {property.codeInternal}</p>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Propietario</h3>
        <div className="flex items-center gap-4">
          <img src={property.owner?.photo} alt="Owner" className="w-24 h-24 object-cover rounded-full" />
          <div>
            <p className="font-semibold">{property.owner?.name}</p>
            <p className="text-sm text-gray-500">{property.owner?.address}</p>
            <p className="text-sm text-gray-400">
              Fecha nacimiento: {new Date(property.owner?.birthday).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Historial de trazabilidad</h3>
        {property.traces?.length === 0 ? (
          <p className="text-sm text-gray-500">No hay trazabilidad registrada.</p>
        ) : (
          <ul className="space-y-2">
            {property.traces.map(trace => (
              <li key={trace.idPropertyTrace} className="border p-4 rounded shadow">
                <p className="text-sm font-bold">{trace.name}</p>
                <p className="text-sm text-gray-600">Fecha: {new Date(trace.dateSale).toLocaleDateString()}</p>
                <p className="text-sm text-gray-600">Valor: $ {trace.value}</p>
                <p className="text-sm text-gray-600">Impuesto: {trace.tax * 100}%</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
