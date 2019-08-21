import {Getter, State} from 'vuex-simple';
import {Tx} from '@/types/tx';

export class TxModule {

  @State()
  private txList!: Tx[];

  constructor() {
    this.txList = [
      {
        timestamp: '19-06-07 14:39:01',
        txHash: '0x76B4b17F3…',
        fromNickname: 'Nettie Keller',
        fromAddress: '',
        toNickname: 'HATCHOUT1',
        toAddress: '',
        purpose: 'bidding',
        txFee: 0.0003610,
        status: 'success',
      },
      {
        timestamp: '19-06-07 14:39:01',
        txHash: '0x76B4b17F3…',
        fromNickname: 'Julia Howell',
        fromAddress: '',
        toNickname: 'HATCHOUT4',
        toAddress: '',
        purpose: 'get NFT in game',
        txFee: 0.0003610,
        status: 'fail',
      },
    ];
  }

  @Getter()
  public get getTxList(): Tx[] {
    return this.txList;
  }

}
