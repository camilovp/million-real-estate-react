
import React, { useRef } from 'react';

const PropertyImageGallery = ({ images }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!images || images.length === 0) {
    return <p className="text-gray-500 text-sm">Sin imágenes disponibles.</p>;
  }

  return (
    <div className="relative">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full px-2 py-1 z-10"
      >
        ←
      </button>
      <div
        ref={containerRef}
        className="flex overflow-x-auto space-x-3 scrollbar-hide px-6"
      >
        {images.map((img) => (
          <img
            key={img.idPropertyImage}
            src={img.file}
            alt="Imagen propiedad"
            className="min-w-[250px] h-40 object-cover rounded shadow"
          />
        ))}
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full px-2 py-1 z-10"
      >
        →
      </button>
    </div>
  );
};

export default PropertyImageGallery;
