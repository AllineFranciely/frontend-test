import { render, screen } from '@testing-library/react';
import CardLocation from '../components/Card/CardLocation';

describe('Testa o componente CardLocation', () => {
  it('Testa se o componente possui ao menos 1 local', () => {
    render(<CardLocation />);

    const local = screen.getByTestId('CardLocation');
    expect(local).toBeInTheDocument();
  });

  it('Testa se o nome dos locais aparecem na tela', () => {
    render(<CardLocation />);

    const name = screen.getByRole('heading');
    expect(name).toBeInTheDocument();
  });

  it('Testa se as demais informações aparecem na tela', () => {
    render(<CardLocation />);

    const climate = screen.getByTestId('climate');
    expect(climate).toBeInTheDocument();

    const terrain = screen.getByTestId('terrain');
    expect(terrain).toBeInTheDocument();

    const surface_water = screen.getByTestId('surface_water');
    expect(surface_water).toBeInTheDocument();

  });
});
