import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filters from '../components/Filters/Filters';
const options = ['release_date', 'rt_score', 'running_time'];

describe('Testa o componente Filters', () => {
  it('Testa se o botão filtrar existe', () => {
    render(<Filters />);

    const filterButton = screen.getByRole('button', { name: /Filtrar/i });
    expect(filterButton).toBeInTheDocument();
    expect(filterButton).toHaveTextContent('Filtrar');
  });

  it('Testa se existe o botão para resetar o filtro', () => {
    render(<Filters />);
    const resetButton = screen.getByRole('button', { name: /Limpar/i });
    expect(resetButton).toBeInTheDocument();
    expect(resetButton).toHaveTextContent('Limpar Filtros');
  });

  // it('Testa se as opções do select se iniciam ocutas', () => {
  //   render(<Filters
  //     name="param"
  //     options={options}
  //     onSelect={() => { }}
  //   />
  //   );
  //   expect(screen.getByText(options[0])).toBeInTheDocument();
  //   expect(screen.queryByText(options[1])).not.toBeInTheDocument();
  //   expect(screen.queryByText(options[2])).not.toBeInTheDocument();

  // })
});
