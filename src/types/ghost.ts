export class Ghost {
  public readonly name: string;
  public readonly gene: string;
  public readonly evilPoint: number;
  public readonly angelPoint: number;
  public readonly level: number;
  constructor(name: string, gene: string, evilPoint: number, angelPoint: number, level: number) {
    this.name = name;
    this.gene = gene;
    this.evilPoint = evilPoint;
    this.angelPoint = angelPoint;
    this.level = level;
  }
}
