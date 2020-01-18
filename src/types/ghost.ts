export interface Ghost {
  readonly name: string;
  readonly gene: string;
  readonly evilPoint: number;
  readonly angelPoint: number;
  readonly level: number;
}

export interface GhostDto {
  gene: string;
  tokenId: number;
  owner: string;
}
