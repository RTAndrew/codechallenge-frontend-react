import Header from '.';
import { act, screen, render } from '../../test-suite';

const makeSut = () => render(<Header />);

describe(Header.name, () => {
  it('renders as expected', async () => {
    await act(async () => {
      makeSut();
    });

    expect(
      screen.getByRole('heading', {
        level: 4,
        name: /Generic logo/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/user-profileImage/i)).toBeInTheDocument();
  });
});
