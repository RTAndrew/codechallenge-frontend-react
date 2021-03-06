import UserDetails from '.';
import { mockUserData as mockData } from '../../mocks/user.mock';
import { render, screen } from '../../test-suite';

const mockUserData = mockData[0];

const makeSut = () => {
  render(<UserDetails user={mockUserData} />);
};
describe(UserDetails.name, () => {
  it('renders as expected', () => {
    makeSut();

    expect(screen.getByText(/credentials/i)).toBeInTheDocument();
    expect(screen.getByText(/general info./i)).toBeInTheDocument();
    expect(screen.getByText(mockUserData.email)).toBeInTheDocument();
    expect(screen.getByText(mockUserData.login.uuid)).toBeInTheDocument();
    expect(screen.getByText(mockUserData.login.username)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockUserData.name.first} ${mockUserData.name.last}`),
    ).toBeInTheDocument();
    expect(screen.getByText(mockUserData.gender)).toBeInTheDocument();
    expect(screen.getByText(mockUserData.phone)).toBeInTheDocument();
    expect(screen.getByText(mockUserData.location.country)).toBeInTheDocument();

    expect(screen.getByAltText(`user-${mockUserData.email}-profile`)).toBeInTheDocument();
  });
});
