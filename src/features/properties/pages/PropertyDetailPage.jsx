import React from 'react';
import { useParams } from 'react-router-dom';
import usePropertyById from '../../../hooks/usePropertyById';
import BackButton from '../../../components/BackButton';
import Header from '../../../components/Header';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const { property, loading, error } = usePropertyById(id);

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!property) return null;

  return (
    <>
      <Header />

      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded shadow-md p-6">
          <h2 className="text-2xl font-bold mb-2">{property.name}</h2>
          <p className="text-gray-600">{property.address}</p>
          <p className="text-lg font-semibold text-sky-700 mt-2">
            ${property.price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">
            Año: {property.year} | Código interno: {property.codeInternal}
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Propietario</h3>
            <div className="flex items-center gap-4">
              <img
                src={property.owner?.photo}
                alt="Owner"
                className="w-20 h-20 object-cover rounded-full shadow"
              />
              <div>
                <p className="font-semibold">{property.owner?.name}</p>
                <p className="text-sm text-gray-500">{property.owner?.address}</p>
                <p className="text-sm text-gray-400">
                  Fecha nacimiento:{' '}
                  {new Date(property.owner?.birthday).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Historial de trazabilidad</h3>
            {property.traces?.length === 0 ? (
              <p className="text-sm text-gray-500">No hay trazabilidad registrada.</p>
            ) : (
              <div className="space-y-4">
                {property.traces.map((trace) => (
                  <div
                    key={trace.idPropertyTrace}
                    className="bg-gray-100 p-4 rounded shadow-sm"
                  >
                    <p className="text-sm font-bold">{trace.name}</p>
                    <p className="text-sm text-gray-600">
                      Fecha: {new Date(trace.dateSale).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-600">
                      Valor: ${trace.value.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">Impuesto: {trace.tax * 100}%</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6">
            <BackButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailsPage;
