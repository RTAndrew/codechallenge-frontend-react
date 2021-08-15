import { fetchUsers } from '.';
import { mockUserData } from '../../mocks/user.mock';
import { makeHttpRequest } from '../../test-suite';

describe('Users service', () => {
  it('(GET) fetchUsers', async () => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () => Promise.resolve(makeHttpRequest(mockUserData)),
          status: 200,
          ok: true,
        }) as any,
    );
    const data = await fetchUsers('?page=1&results=50&seed="codechallenge"');

    expect(data.status).toBe(200);
    expect(data.parsedBody?.results as unknown as any).toBe(mockUserData);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith({
      _bodyInit: undefined,
      _bodyText: '',
      bodyUsed: false,
      credentials: 'same-origin',
      headers: { map: {} },
      method: 'GET',
      mode: null,
      referrer: null,
      signal: undefined,
      url: 'https://randomuser.me/api/?page=1&results=50&seed="codechallenge"',
    });
  });
});
