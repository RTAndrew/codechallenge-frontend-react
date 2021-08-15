import { render, screen, act, makeGetRequest } from './test-suite';
import App from './App';
import { mockUserData } from './mocks/user.mock';
import { config } from './config';

const fetchUsers = jest.spyOn(require('./services/users'), 'fetchUsers');
const mockUser = mockUserData.slice(0, 5);

const makeSut = () => render(<App />);

describe('Application', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (fetchUsers as jest.Mock).mockResolvedValue(makeGetRequest(mockUser));
  });

  it('renders as expected', async () => {
    await act(async () => {
      makeSut();
    });

    // asserts the header
    expect(
      screen.getByRole('heading', {
        level: 4,
        name: config.CompanyName,
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/user-profileImage/i)).toBeInTheDocument();

    // asserts the search-content
    expect(screen.getAllByRole('textbox').length).toBe(1);
    expect(screen.getByText(config.Headline)).toBeInTheDocument();
    expect(screen.getByText(config.Motto)).toBeInTheDocument();

    // asserts the table headers
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/country/i)).toBeInTheDocument();
    expect(screen.getByText(/actions/i)).toBeInTheDocument();

    mockUser.map((i) =>
      expect(screen.getByLabelText(`visualize-user-${i.email}`)).toBeInTheDocument(),
    );

    expect(fetchUsers).toBeCalledTimes(1);
    expect(fetchUsers).toBeCalledWith('?page=1&results=50&seed="codechallenge"');
  });
});
