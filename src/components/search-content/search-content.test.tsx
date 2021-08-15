import SearchContent from '.';
import { config } from '../../config';
import { mockUserData } from '../../mocks/user.mock';
import { userEvent, act, render, screen, makeGetRequest } from '../../test-suite';

const fetchUsers = jest.spyOn(require('../../services/users'), 'fetchUsers');
const mockFirstResponse = mockUserData.slice(0, 5);
const mockSecondResponse = mockUserData.slice(6, 10);
const mockThirdResponse = mockUserData.slice(11, 16);

const makeSut = () => render(<SearchContent />);

describe(SearchContent.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (fetchUsers as jest.Mock).mockResolvedValue(makeGetRequest(mockFirstResponse));
  });

  it('renders the application headline', async () => {
    await act(async () => {
      makeSut();
    });

    expect(
      screen.getByRole('heading', {
        // eslint-disable-next-line quotes
        name: config.Headline,
        level: 5,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: config.Motto,
        level: 5,
      }),
    );
  });

  it('renders as expected', async () => {
    await act(async () => {
      makeSut();
    });

    // asserts that the fetchUser has been called only one time
    expect(fetchUsers).toBeCalledTimes(1);
    expect(fetchUsers).toHaveBeenCalledWith(
      `?page=1&results=${config.ApiResultsPerPage}&seed="codechallenge"`,
    );

    //asserts that the load-more button is present
    expect(screen.getByLabelText(/loadmore-icon/i)).toBeInTheDocument();
    expect(screen.getByText(/load more/i)).toBeInTheDocument();

    // asserts that the total elements have indeed been rendered
    mockFirstResponse.map((i) =>
      expect(screen.getByLabelText(`visualize-user-${i.email}`)).toBeInTheDocument(),
    );
  });

  it('renders as expected upon a rejected promise', async () => {
    jest.clearAllMocks();
    fetchUsers.mockClear();
    (fetchUsers as jest.Mock).mockRejectedValue(new Error('random-error'));

    await act(async () => {
      makeSut();
    });

    expect(fetchUsers).toBeCalledTimes(1);
    expect(fetchUsers).toHaveBeenCalledWith(
      `?page=1&results=${config.ApiResultsPerPage}&seed="codechallenge"`,
    );

    expect(screen.queryByLabelText(/loadmore-icon/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/load more/i)).not.toBeInTheDocument();

    mockFirstResponse.map((i) =>
      expect(screen.queryByLabelText(`visualize-user-${i.email}`)).not.toBeInTheDocument(),
    );

    expect(screen.getByText(/Oops. We are facing some problems. 😞/i)).toBeInTheDocument();
  });

  it('fetches user data multiple times by clicking in load-more', async () => {
    (fetchUsers as jest.Mock)
      .mockResolvedValueOnce(makeGetRequest(mockFirstResponse))
      .mockResolvedValueOnce(makeGetRequest(mockSecondResponse))
      .mockResolvedValueOnce(makeGetRequest(mockThirdResponse));

    await act(async () => {
      makeSut();
    });

    // asserts that the total elements of the first resolved promise have been rendered
    mockFirstResponse.map((i) =>
      expect(screen.getByLabelText(`visualize-user-${i.email}`)).toBeInTheDocument(),
    );

    // asserts that the total elements of the second resolved promise have been rendered
    await act(async () => {
      userEvent.click(screen.getByText(/load more/i));
    });
    mockSecondResponse.map((i) =>
      expect(screen.getByLabelText(`visualize-user-${i.email}`)).toBeInTheDocument(),
    );

    // asserts that the total elements of the third resolved promise have been rendered
    await act(async () => {
      userEvent.click(screen.getByText(/load more/i));
    });
    mockThirdResponse.map((i) =>
      expect(screen.getByLabelText(`visualize-user-${i.email}`)).toBeInTheDocument(),
    );

    expect(fetchUsers).toHaveBeenCalledTimes(3);
  });

  it('renders the input and asserts that it accepts values', async () => {
    await act(async () => {
      makeSut();
    });

    const inputTest = 'random-string';

    const input = screen.getByPlaceholderText(/Type the username or the country/i);
    userEvent.type(input, inputTest);
    // asserts that the input working as expected
    expect(input).toHaveValue(inputTest);
    userEvent.click(
      screen.getByRole('button', {
        name: /search/i,
      }),
    );

    // asserts that no results have been found
    expect(screen.getByRole('cell', { name: /no data/i })).toBeInTheDocument();

    userEvent.clear(input);
    userEvent.type(input, mockUserData[0].name.first);
    userEvent.click(
      screen.getByRole('button', {
        name: /search/i,
      }),
    );

    // asserts that the only result has been rendered,
    // while the rest has not.
    expect(screen.getByLabelText(`visualize-user-${mockUserData[0].email}`)).toBeInTheDocument();

    mockUserData
      .slice(1)
      .map((i) =>
        expect(screen.queryByLabelText(`visualize-user-${i.email}`)).not.toBeInTheDocument(),
      );
  });

  it('clicks in a user and opens more the more-details-modal ', async () => {
    (fetchUsers as jest.Mock).mockResolvedValueOnce(makeGetRequest([mockFirstResponse[0]]));

    await act(async () => {
      makeSut();
    });

    act(() => {
      userEvent.click(screen.getByLabelText(`visualize-user-${mockUserData[0].email}`));
    });

    expect(screen.getByText(mockFirstResponse[0].login.uuid)).toBeInTheDocument();
    expect(screen.getByText(mockFirstResponse[0].login.username)).toBeInTheDocument();
    expect(
      screen.getAllByText(`${mockFirstResponse[0].name.first} ${mockFirstResponse[0].name.last}`)
        .length,
    ).toBe(2);

    expect(screen.getByText(mockFirstResponse[0].email)).toBeInTheDocument();
    expect(screen.getByText(mockFirstResponse[0].gender)).toBeInTheDocument();
    expect(screen.getByText(mockFirstResponse[0].phone)).toBeInTheDocument();
    expect(
      screen.getAllByText(mockFirstResponse[0].location.country).length,
    ).toBeGreaterThanOrEqual(1);

    // asserts that the modal is closable
    userEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.queryByText(mockFirstResponse[0].login.uuid)).not.toBeInTheDocument();
    expect(screen.queryByText(mockFirstResponse[0].login.username)).not.toBeInTheDocument();
  });

  it('fetches data accordingly to the URL', async () => {
    (fetchUsers as jest.Mock)
      .mockResolvedValueOnce(makeGetRequest(mockFirstResponse))
      .mockResolvedValueOnce(makeGetRequest(mockSecondResponse))
      .mockResolvedValueOnce(makeGetRequest(mockThirdResponse));

    const location = new URL('https://www.coodesh-challenge.com#page=2');
    // @ts-ignore
    delete window.location;
    // @ts-ignore
    window.location = location;

    await act(async () => {
      makeSut();
    });

    // it will fetch data accordingly
    // to the hash valeu (#2 in this case)
    expect(fetchUsers).toBeCalledTimes(2);

    // asserts that the total elements have indeed been rendered
    mockFirstResponse.map((i) =>
      expect(screen.getByLabelText(`visualize-user-${i.email}`)).toBeInTheDocument(),
    );
  });
});
