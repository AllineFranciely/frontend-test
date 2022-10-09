import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';

describe('Testa o componente Card', () => {
  it('Testa se o componente possui ao menos 1 filme', () => {
    render(<Card />);

    const filme = screen.getByTestId('Card');
    expect(filme).toBeInTheDocument();
  });

  it('Testa se o título dos filmes aparecem na tela', () => {
    render(<Card />);

    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });

  it('Testa se a imagem dos filmes aparece na tela', () => {
    render(<Card />);

    const images = screen.getByRole('img');
    expect(images).toBeInTheDocument();
  });

  it('Testa se as demais informações aparecem na tela', () => {
    render(<Card />);

    const tituloOriginal = screen.getByTestId('tituloOriginal');
    expect(tituloOriginal).toBeInTheDocument();

    const diretor = screen.getByTestId('diretor');
    expect(diretor).toBeInTheDocument();

    const ano = screen.getByTestId('ano');
    expect(ano).toBeInTheDocument();

    const nota = screen.getByTestId('nota');
    expect(nota).toBeInTheDocument();

    const tempo = screen.getByTestId('tempo');
    expect(tempo).toBeInTheDocument();

    const descricao = screen.getByTestId('descricao');
    expect(descricao).toBeInTheDocument();
  });
});
