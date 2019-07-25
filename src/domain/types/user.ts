export interface User {
  id: number;
  address: string;
  name: string;
  point: number;
  level: number;
}

export interface SignInDto {
  id: number;
  address: string;
  name: string;
  point: string;
  level: string;
  jwt: string;
}
