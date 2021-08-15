import { IUser } from '../types';

export const mockUserData: ReadonlyArray<IUser> = [
  {
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
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Nurdan',
      last: 'Erbulak',
    },
    location: {
      street: {
        number: 486,
        name: 'Anafartalar Cd',
      },
      city: 'Iğdır',
      state: 'İzmir',
      country: 'Turkey',
      postcode: 71775,
      coordinates: {
        latitude: '55.3034',
        longitude: '-102.0201',
      },
      timezone: {
        offset: '-1:00',
        description: 'Azores, Cape Verde Islands',
      },
    },
    email: 'nurdan.erbulak@example.com',
    login: {
      uuid: 'b382a061-0dea-4b56-a01f-6a502ce14420',
      username: 'angryzebra222',
      password: 'bigd',
      salt: 'uajV3gst',
      md5: '20e0077620a1f4f14d5bed512d886fab',
      sha1: 'e6de91a72e7e93e188a14dce4b0608c821364d83',
      sha256: 'efd9451bb90668b1dabc67a93bbfb41284706d2fddec5a20d90c2a4d66688276',
    },
    dob: {
      date: new Date('1995-04-23T14:34:32.409Z'),
      age: 26,
    },
    registered: {
      date: new Date('2008-01-08T13:01:53.126Z'),
      age: 13,
    },
    phone: '(486)-618-6530',
    cell: '(575)-759-0555',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/51.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/51.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/51.jpg',
    },
    nat: 'TR',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Hudson',
      last: 'Miller',
    },
    location: {
      street: {
        number: 3461,
        name: 'Bay Ave',
      },
      city: 'Fountainbleu',
      state: 'Québec',
      country: 'Canada',
      postcode: 'D9D 7Q0',
      coordinates: {
        latitude: '87.9730',
        longitude: '-130.8882',
      },
      timezone: {
        offset: '+5:30',
        description: 'Bombay, Calcutta, Madras, New Delhi',
      },
    },
    email: 'hudson.miller@example.com',
    login: {
      uuid: 'e586eaa1-ea85-409c-9c8f-0989266ab535',
      username: 'sadswan418',
      password: 'quebec',
      salt: 'IQTVIa3x',
      md5: '4f134a19eb83fad830daddaa1792b113',
      sha1: 'b3c633cfcaa4de3aa4a931a594a6db427485bf1a',
      sha256: '513e84de1dc6038fff2d22164f6b0835ce0f599a0bed47ddae488d42dbeaadd8',
    },
    dob: {
      date: new Date('1952-05-08T21:10:44.480Z'),
      age: 69,
    },
    registered: {
      date: new Date('2008-01-16T01:12:45.133Z'),
      age: 13,
    },
    phone: '938-368-0237',
    cell: '565-407-4349',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/57.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/57.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Silke',
      last: 'Pedersen',
    },
    location: {
      street: {
        number: 4305,
        name: 'Ågade',
      },
      city: 'Assens',
      state: 'Syddanmark',
      country: 'Denmark',
      postcode: 56302,
      coordinates: {
        latitude: '48.8484',
        longitude: '-1.3765',
      },
      timezone: {
        offset: '-6:00',
        description: 'Central Time (US & Canada), Mexico City',
      },
    },
    email: 'silke.pedersen@example.com',
    login: {
      uuid: '9bbc90d5-bbd5-4259-b5d5-9d145c8b870b',
      username: 'yellowgorilla284',
      password: 'clyde',
      salt: 'VVr44pAs',
      md5: '3a8cbf03727d2da975d389a52a152faa',
      sha1: '1bf9fcf75e7eeab1b983879a3cee9008453041f4',
      sha256: 'b7a11c00c468ad7856b66b2ebd2703e2c827ceaca1c51126b4edda20566b1edf',
    },
    dob: {
      date: new Date('1952-03-27T11:16:18.901Z'),
      age: 69,
    },
    registered: {
      date: new Date('2014-04-22T15:21:03.038Z'),
      age: 7,
    },
    phone: '30312616',
    cell: '09547185',
    id: {
      name: 'CPR',
      value: '270352-0079',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/4.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/4.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/4.jpg',
    },
    nat: 'DK',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Stephen',
      last: 'Scheffler',
    },
    location: {
      street: {
        number: 323,
        name: 'Schillerstraße',
      },
      city: 'Eislingen/Fils',
      state: 'Baden-Württemberg',
      country: 'Germany',
      postcode: 64350,
      coordinates: {
        latitude: '-17.6860',
        longitude: '-45.9072',
      },
      timezone: {
        offset: '0:00',
        description: 'Western Europe Time, London, Lisbon, Casablanca',
      },
    },
    email: 'stephen.scheffler@example.com',
    login: {
      uuid: '7f2e1b90-49eb-4236-b1f8-cc4ee4643f63',
      username: 'tinyrabbit128',
      password: 'village',
      salt: 'qhNkzrkw',
      md5: 'd1066c22004c4bcc91ee6c4cc867c650',
      sha1: '22be10942e02a7a90041e43f5986eb83c940b2f7',
      sha256: '3ce11684bc6d79159b64357e77c7842583fddf19e3ad02a4a918253f24fe9c34',
    },
    dob: {
      date: new Date('1984-08-25T13:14:42.786Z'),
      age: 37,
    },
    registered: {
      date: new Date('2002-07-31T23:41:37.543Z'),
      age: 19,
    },
    phone: '0471-5350984',
    cell: '0173-8437022',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/14.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/14.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/14.jpg',
    },
    nat: 'DE',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Silas',
      last: 'Thomsen',
    },
    location: {
      street: {
        number: 4866,
        name: 'Kastanievej',
      },
      city: 'Klitmøller',
      state: 'Syddanmark',
      country: 'Denmark',
      postcode: 54586,
      coordinates: {
        latitude: '-36.4406',
        longitude: '-89.5589',
      },
      timezone: {
        offset: '+3:00',
        description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
      },
    },
    email: 'silas.thomsen@example.com',
    login: {
      uuid: 'df8765e7-dbff-4c77-903b-13055d1b8f3e',
      username: 'brownpeacock196',
      password: '0.0.0.000',
      salt: '1S80XBBe',
      md5: 'da17c7f4d911201e5f7439b8e6a5cbfc',
      sha1: '513849d574850eecea491a028e1dd6304fff8a1a',
      sha256: '2ff47c85bd592d59f2fbb38cb8108d94e3cfdfb28633b19e52c612eca65d6ca5',
    },
    dob: {
      date: new Date('1956-06-17T20:22:19.301Z'),
      age: 65,
    },
    registered: {
      date: new Date('2003-03-18T22:32:23.362Z'),
      age: 18,
    },
    phone: '38175918',
    cell: '34969573',
    id: {
      name: 'CPR',
      value: '170656-0980',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/34.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/34.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
    },
    nat: 'DK',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Gordon',
      last: 'Price',
    },
    location: {
      street: {
        number: 990,
        name: 'Broadway',
      },
      city: 'Chester',
      state: 'Cleveland',
      country: 'United Kingdom',
      postcode: 'HI0 7EQ',
      coordinates: {
        latitude: '-24.2050',
        longitude: '-13.1252',
      },
      timezone: {
        offset: '-4:00',
        description: 'Atlantic Time (Canada), Caracas, La Paz',
      },
    },
    email: 'gordon.price@example.com',
    login: {
      uuid: 'ebf8c50e-d083-46b4-9031-d5fe96cb7f2d',
      username: 'blueswan615',
      password: 'yyyyy',
      salt: 't96IzXRB',
      md5: 'e452e26f3864cf6ff929359b2828ba5a',
      sha1: '581d90499c10cc6600f276a0d945b241edf76304',
      sha256: '2e2e7169a2c063a630e87c1d96e0a5c7e60340d4bb8fa72dfa4572c8e9590803',
    },
    dob: {
      date: new Date('1988-01-15T19:23:12.993Z'),
      age: 33,
    },
    registered: {
      date: new Date('2003-12-13T03:46:27.320Z'),
      age: 18,
    },
    phone: '0121 209 8032',
    cell: '0714-648-691',
    id: {
      name: 'NINO',
      value: 'ZP 00 29 60 W',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/23.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/23.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/23.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Dominic',
      last: 'Harcourt',
    },
    location: {
      street: {
        number: 5932,
        name: '15th St',
      },
      city: 'Lafontaine',
      state: 'Québec',
      country: 'Canada',
      postcode: 'N7L 6D1',
      coordinates: {
        latitude: '13.1216',
        longitude: '108.7419',
      },
      timezone: {
        offset: '+1:00',
        description: 'Brussels, Copenhagen, Madrid, Paris',
      },
    },
    email: 'dominic.harcourt@example.com',
    login: {
      uuid: '13b4090f-5b16-4a43-8408-cb383ec32603',
      username: 'organiclion113',
      password: 'skater',
      salt: 's0JDBlD8',
      md5: '1aa44cd596df6790964d4b1d8a5e48f7',
      sha1: '7ca3456c53ebdda353bb0ce4432d078b5345e294',
      sha256: '0dc2be15399314e0e04b16ff988de5cd3e12e58291f1c92df2ca8a76945e058d',
    },
    dob: {
      date: new Date('1970-08-05T18:13:27.909Z'),
      age: 51,
    },
    registered: {
      date: new Date('2010-04-18T03:23:14.464Z'),
      age: 11,
    },
    phone: '148-472-8550',
    cell: '179-985-5067',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/76.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/76.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/76.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'H.-Dieter',
      last: 'Kuhlmann',
    },
    location: {
      street: {
        number: 3851,
        name: 'Industriestraße',
      },
      city: 'Oer-Erkenschwick',
      state: 'Thüringen',
      country: 'Germany',
      postcode: 89888,
      coordinates: {
        latitude: '-43.8511',
        longitude: '-170.6182',
      },
      timezone: {
        offset: '+3:30',
        description: 'Tehran',
      },
    },
    email: 'h.-dieter.kuhlmann@example.com',
    login: {
      uuid: 'ed1533b0-a680-4c05-889b-98390e8e6ef0',
      username: 'blackdog774',
      password: '00000',
      salt: 'TkSEYlUc',
      md5: '143d5bb93d3d739a7ed45c0ab3ecfa1d',
      sha1: 'c45f941b2db273f1b9ee6facc62f165a7d23b31f',
      sha256: 'e32856061592a720008015a0d31291f714709086b10f2f237b9f9ed05d074aa3',
    },
    dob: {
      date: new Date('1994-04-15T11:32:12.299Z'),
      age: 27,
    },
    registered: {
      date: new Date('2011-07-24T11:34:28.020Z'),
      age: 10,
    },
    phone: '0761-0876529',
    cell: '0177-2335388',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/84.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/84.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/84.jpg',
    },
    nat: 'DE',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Esther',
      last: 'Davis',
    },
    location: {
      street: {
        number: 5922,
        name: 'Railroad St',
      },
      city: 'Australian Capital Territory',
      state: 'Victoria',
      country: 'Australia',
      postcode: 7678,
      coordinates: {
        latitude: '-27.0975',
        longitude: '-166.3842',
      },
      timezone: {
        offset: '+5:30',
        description: 'Bombay, Calcutta, Madras, New Delhi',
      },
    },
    email: 'esther.davis@example.com',
    login: {
      uuid: '474ab111-25ac-431f-bcd3-e264c36dde7b',
      username: 'orangerabbit859',
      password: 'philips',
      salt: 'lFY9YVfa',
      md5: '9ccabe32a2ffdda06e667e5b1be2f4c6',
      sha1: '52627f7b1b7048588e991520f71fb61b2c9a794c',
      sha256: '2dd624e6fbc323f270cd98f96a51c6b3165e954144c15e6c6e49471bd0910bf8',
    },
    dob: {
      date: new Date('1970-05-16T20:54:55.768Z'),
      age: 51,
    },
    registered: {
      date: new Date('2004-09-21T06:47:19.216Z'),
      age: 17,
    },
    phone: '00-3142-2647',
    cell: '0486-613-937',
    id: {
      name: 'TFN',
      value: '244438358',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/7.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/7.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
    },
    nat: 'AU',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Bárbaro',
      last: 'Jesus',
    },
    location: {
      street: {
        number: 7990,
        name: 'Rua Carlos Gomes',
      },
      city: 'Manaus',
      state: 'Pará',
      country: 'Brazil',
      postcode: 13167,
      coordinates: {
        latitude: '-74.1901',
        longitude: '-72.2324',
      },
      timezone: {
        offset: '-2:00',
        description: 'Mid-Atlantic',
      },
    },
    email: 'barbaro.jesus@example.com',
    login: {
      uuid: '386c2890-4e38-42ec-a7e2-6e048fadd0da',
      username: 'whitedog460',
      password: 'joecool',
      salt: 's6mFi5Wk',
      md5: '1b11151670d6f7145a64a0d705648fa4',
      sha1: '6415adfc4c5f3bab0c0135ff84155e9668999a75',
      sha256: '53a76a9e436b5ae531e07fe27317c1c50007c9005a7445145c734f0069088520',
    },
    dob: {
      date: new Date('1994-02-02T10:48:18.603Z'),
      age: 27,
    },
    registered: {
      date: new Date('2003-03-09T10:21:27.174Z'),
      age: 18,
    },
    phone: '(59) 6880-8649',
    cell: '(41) 0409-1670',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/28.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/28.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/28.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Martin',
      last: 'Meunier',
    },
    location: {
      street: {
        number: 1928,
        name: 'Montée du Chemin-Neuf',
      },
      city: 'Pau',
      state: 'Gironde',
      country: 'France',
      postcode: 66871,
      coordinates: {
        latitude: '-7.9083',
        longitude: '144.4370',
      },
      timezone: {
        offset: '-2:00',
        description: 'Mid-Atlantic',
      },
    },
    email: 'martin.meunier@example.com',
    login: {
      uuid: '72160e2a-c080-49a5-b2a5-ae40c4a2887f',
      username: 'heavywolf966',
      password: 'lickit',
      salt: '3saXsPkG',
      md5: '975e5764bb052ad0690206ced0bb3a51',
      sha1: 'e7ee8f4a4b590f838ba7680044eb60d16ec9603a',
      sha256: '93b3c23a72f8e7d6d3263e167ffd11afa7e31daa6dd3e0c4e9a173d83b520aa0',
    },
    dob: {
      date: new Date('1967-03-30T12:15:51.260Z'),
      age: 54,
    },
    registered: {
      date: new Date('2010-04-11T08:37:31.128Z'),
      age: 11,
    },
    phone: '02-70-64-40-60',
    cell: '06-22-66-08-00',
    id: {
      name: 'INSEE',
      value: '1NNaN98831507 53',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/78.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/78.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    },
    nat: 'FR',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Phillip',
      last: 'Parker',
    },
    location: {
      street: {
        number: 8596,
        name: 'Brick Kiln Road',
      },
      city: 'Kingston upon Hull',
      state: 'Cornwall',
      country: 'United Kingdom',
      postcode: 'IN3 6RE',
      coordinates: {
        latitude: '83.3542',
        longitude: '-29.6579',
      },
      timezone: {
        offset: '+1:00',
        description: 'Brussels, Copenhagen, Madrid, Paris',
      },
    },
    email: 'phillip.parker@example.com',
    login: {
      uuid: '7c5b0b77-1903-4499-8d11-ede5291b8797',
      username: 'blackcat112',
      password: 'fenway',
      salt: 'W6dls68I',
      md5: '45564d14c6751fd98e91532f008afdc6',
      sha1: 'd7ed4f58ac34103435f90ee89c8b52605252170c',
      sha256: '89372cc92967f99c39a2a4a02554d87c33f4e82b2e00f8b2b745b62ea4af5c2e',
    },
    dob: {
      date: new Date('1991-07-30T21:15:43.569Z'),
      age: 30,
    },
    registered: {
      date: new Date('2010-11-23T22:00:18.780Z'),
      age: 11,
    },
    phone: '016977 79866',
    cell: '0770-117-393',
    id: {
      name: 'NINO',
      value: 'CS 56 48 93 Z',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/4.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/4.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/4.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Salvador',
      last: 'Simpson',
    },
    location: {
      street: {
        number: 8565,
        name: 'Walnut Hill Ln',
      },
      city: 'Dayton',
      state: 'Louisiana',
      country: 'United States',
      postcode: 25724,
      coordinates: {
        latitude: '46.9019',
        longitude: '66.0270',
      },
      timezone: {
        offset: '+5:45',
        description: 'Kathmandu',
      },
    },
    email: 'salvador.simpson@example.com',
    login: {
      uuid: '7d0629ce-034e-4f95-a10d-70abb5554bd9',
      username: 'redfrog906',
      password: 'great1',
      salt: 'BofccXmB',
      md5: 'd49ee877d919da09481846b68613ebf8',
      sha1: '9a24283d967f874d09aae75fed316f5f6f64337f',
      sha256: '5c9b171ddfde467653377a5d02b29fff04340efe433a249c4e57afbc99a3f67c',
    },
    dob: {
      date: new Date('1950-03-26T20:56:33.128Z'),
      age: 71,
    },
    registered: {
      date: new Date('2013-12-23T07:03:18.056Z'),
      age: 8,
    },
    phone: '(854)-332-4462',
    cell: '(299)-741-7074',
    id: {
      name: 'SSN',
      value: '971-37-8359',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/81.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg',
    },
    nat: 'US',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Kübra',
      last: 'Erbay',
    },
    location: {
      street: {
        number: 7171,
        name: 'Fatih Sultan Mehmet Cd',
      },
      city: 'Yozgat',
      state: 'İzmir',
      country: 'Turkey',
      postcode: 37519,
      coordinates: {
        latitude: '73.9213',
        longitude: '67.1439',
      },
      timezone: {
        offset: '-3:00',
        description: 'Brazil, Buenos Aires, Georgetown',
      },
    },
    email: 'kubra.erbay@example.com',
    login: {
      uuid: '95e60d0e-517b-4192-a778-6dae01a773aa',
      username: 'sadcat811',
      password: 'otto',
      salt: 'PBVF7Hza',
      md5: '69ffb129a1df8241b6b8bc658127ef4e',
      sha1: '9e29a291dd8bcb8000b10494690af0dd947d0e0a',
      sha256: '14c29b858cfbc0c10ca8a0d2d7ae004311c9ff0b288d6f42e038f39b5cde4b34',
    },
    dob: {
      date: new Date('1979-10-19T06:47:25.992Z'),
      age: 42,
    },
    registered: {
      date: new Date('2009-06-25T04:52:52.313Z'),
      age: 12,
    },
    phone: '(057)-134-0454',
    cell: '(655)-057-4199',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/24.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/24.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/24.jpg',
    },
    nat: 'TR',
  },
];
