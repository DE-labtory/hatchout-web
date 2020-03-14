import {Action, Getter, State} from 'vuex-simple';
import {Ghost} from '@/types';
import {Inject} from 'typedi';
import {GhostApi} from '@/api/ghost/ghost.api';
import {Injectable} from 'vue-typedi';

@Injectable()
export class GhostModule {

  @Inject()
  private ghostApi!: GhostApi;

  @State()
  private ghosts!: Ghost[];

  constructor() {
    this.ghosts = [
      {
        name: 'Token Name1',
        gene: 'token ID',
        tokenId: 1,
        userAddress: 'user1',
        level: 1,
        angelPoint: 10,
        devilPoint: 20,
        createdDate: Date.now(),
      },
      {
        name: 'Token Name2',
        gene: 'token ID2',
        tokenId: 2,
        userAddress: 'user2',
        level: 1,
        angelPoint: 10,
        devilPoint: 20,
        createdDate: Date.now(),
      },
      {
        name: 'Token Name3',
        gene: 'token ID3',
        tokenId: 3,
        userAddress: 'user3',
        level: 1,
        angelPoint: 10,
        devilPoint: 20,
        createdDate: Date.now(),
      },
      {
        name: 'Token Name4',
        gene: 'token ID4',
        tokenId: 4,
        userAddress: 'user4',
        level: 1,
        angelPoint: 10,
        devilPoint: 20,
        createdDate: Date.now(),
      },
      {
        name: 'Token Name5',
        gene: 'token ID5',
        tokenId: 5,
        userAddress: 'user5',
        level: 1,
        angelPoint: 10,
        devilPoint: 20,
        createdDate: Date.now(),
      },
      {
        name: 'Token Name6',
        gene: 'token ID6',
        tokenId: 6,
        userAddress: 'user6',
        level: 1,
        angelPoint: 10,
        devilPoint: 20,
        createdDate: Date.now(),
      },
    ];
  }


  @Action()
  public async loadGhostsByPage(page: number): Promise<void> {
    this.ghosts = await this.ghostApi.getByPage(page);
  }

  @Getter()
  public get getGhosts(): Ghost[] {
    return this.ghosts;
  }

}
