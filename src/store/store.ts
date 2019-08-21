import {Module} from 'vuex-simple';
import {UserModule} from '@/store/modules/user';
import {GhostModule} from '@/store/modules/ghost';
import {TxModule} from '@/store/modules/tx';


export class Store {
  @Module()
  public userModule = new UserModule();
  @Module()
  public ghostModule = new GhostModule();
  @Module()
  public txModule = new TxModule();
}

