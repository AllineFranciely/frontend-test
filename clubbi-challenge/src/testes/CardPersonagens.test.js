import { render, screen } from '@testing-library/react';
import CardPersonagem from '../components/Card/CardPersonagem';

describe('Testa o componente CardPersonagem', () => {
  it('Testa se o componente possui ao menos 1 personagem', () => {
    render(<CardPersonagem />);

    const personagem = screen.getByTestId('CardPersonagem');
    expect(personagem).toBeInTheDocument();
  });

  it('Testa se o nome dos personagens aparecem na tela', () => {
    render(<CardPersonagem />);

    const name = screen.getByRole('heading');
    expect(name).toBeInTheDocument();
  });

  it('Testa se as demais informações aparecem na tela', () => {
    render(<CardPersonagem />);

    const gender = screen.getByTestId('gender');
    expect(gender).toBeInTheDocument();

    const age = screen.getByTestId('age');
    expect(age).toBeInTheDocument();

    const eyes = screen.getByTestId('eyes');
    expect(eyes).toBeInTheDocument();

    const hair = screen.getByTestId('hair');
    expect(hair).toBeInTheDocument();
  });
});
