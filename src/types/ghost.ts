export interface Ghost {
  readonly name: string;
  readonly gene: string;
  readonly tokenId: number;
  readonly userAddress: string;
  readonly level: number;
  readonly angelPoint: number;
  readonly devilPoint: number;
  readonly createdDate: number;
}

export interface GhostDto {
  gene: string;
  tokenId: number;
  owner: string;
}
