import {Getter, State} from 'vuex-simple';
import {Ghost} from '@/types';

export class GhostModule {
  @State()
  private ghosts!: Ghost[];

  constructor() {
    this.ghosts = [
      {gene: 'token ID', evilPoint: 90, angelPoint: 80, name: 'Token Name1', level: 2},
      {gene: 'token ID2', evilPoint: 90, angelPoint: 80, name: 'Token Name2', level: 2},
      {gene: 'token ID3', evilPoint: 90, angelPoint: 80, name: 'Token Name3', level: 2},
      {gene: 'token ID4', evilPoint: 90, angelPoint: 80, name: 'Token Name4', level: 2},
      {gene: 'token ID5', evilPoint: 90, angelPoint: 80, name: 'Token Name5', level: 2},
      {gene: 'token ID6', evilPoint: 90, angelPoint: 80, name: 'Token Name6', level: 2},
    ];
  }

  @Getter()
  public get getGhosts(): Ghost[] {
    return this.ghosts;
  }

}
