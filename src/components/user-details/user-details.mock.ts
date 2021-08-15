import { IUser } from '../../types';

export const mockUserData: IUser = {
  gender: 'male',
  name: {
    title: 'Mr',
    first: 'Macit',
    last: 'Özkök',
  },
  location: {
    street: {
      number: 4119,
      name: 'Maçka Cd',
    },
    city: 'Çankırı',
    state: 'Manisa',
    country: 'Turkey',
    postcode: 26468,
    coordinates: {
      latitude: '69.3157',
      longitude: '-112.0863',
    },
    timezone: {
      offset: '+3:00',
      description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
    },
  },
  email: 'macit.ozkok@example.com',
  login: {
    uuid: 'af86b382-eab5-4221-b2b8-a11b2a53d273',
    username: 'sadlion707',
    password: 'brandy1',
    salt: '7PTujhgC',
    md5: 'dd0fc714bf87b3b0b043eab87a34773a',
    sha1: 'a97d5b5bb52301ba275aebfd20d4e65c3ab9e797',
    sha256: '858eb0d23ca79174369ef8e4816c262f60f1e1bf557e3f207e228818bc6c2c3b',
  },
  dob: {
    date: new Date('1948-04-16T05:04:15.739Z'),
    age: 73,
  },
  registered: {
    date: new Date('2003-08-25T22:36:12.651Z'),
    age: 18,
  },
  phone: '(163)-281-4282',
  cell: '(725)-160-3108',
  id: {
    name: '',
    value: null,
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/70.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/70.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/70.jpg',
  },
  nat: 'TR',
};
