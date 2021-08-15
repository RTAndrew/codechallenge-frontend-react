import Header from '.';
import { config } from '../../config';
import { screen, render } from '../../test-suite';

const makeSut = () => render(<Header />);

describe(Header.name, () => {
  it('renders as expected', async () => {
    makeSut();

    expect(
      screen.getByRole('heading', {
        level: 4,
        name: config.CompanyName,
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/user-profileImage/i)).toBeInTheDocument();
  });
});
