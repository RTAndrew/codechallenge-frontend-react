interface Birthdate {
  date: Date;
  age: number;
}

interface ID {
  name: string;
  value: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Timezone {
  offset: string;
  description: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUser {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Birthdate;
  registered: Birthdate;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}
