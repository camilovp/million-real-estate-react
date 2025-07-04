// src/features/properties/components/__tests__/PropertyFilters.test.jsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest'; 
import PropertyFilters from '../src/features/properties/components/PropertyFilters';

test('ejecuta el filtro al hacer submit', () => {
  const onFilter = vi.fn();
  render(<PropertyFilters onFilter={onFilter} />);
  
  fireEvent.change(screen.getByPlaceholderText('Nombre'), {
    target: { value: 'Casa' }
  });

  fireEvent.click(screen.getByText('Buscar'));

  expect(onFilter).toHaveBeenCalledWith(
    expect.objectContaining({ name: 'Casa' })
  );
});

test('actualiza los inputs correctamente', () => {
  render(<PropertyFilters onFilter={vi.fn()} />);

  fireEvent.change(screen.getByPlaceholderText('Nombre'), {
    target: { value: 'Loft' },
  });

  expect(screen.getByPlaceholderText('Nombre')).toHaveValue('Loft');
});

