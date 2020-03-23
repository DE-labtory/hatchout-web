export class User {
  private id: number;
  private address: string;
  private name: string;
  private point: number;
  private level: number;
  private jwt: string;

  constructor(id: number, address: string, name: string, point: number, level: number, jwt: string) {
    this.id = id;
    this.address = address;
    this.name = name;
    this.point = point;
    this.level = level;
    this.jwt = jwt;
  }
}

export interface SignDto {
  id: number;
  address: string;
  name: string;
  point: number;
  level: number;
  jwt: string;
}
