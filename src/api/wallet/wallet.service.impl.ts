import {Service} from 'typedi';
import {WalletService} from '@/api/wallet/wallet.service';
import Web3 from 'web3';

@Service()
export class MetaMaskServiceImpl implements WalletService {
    private ethereum = window.ethereum;
    private accounts: any;
    private web3: any;

    public async MetaMaskServiceImpl() {
        try {
            this.accounts = await this.ethereum.enable();
            this.web3 = new Web3(this.ethereum);
        } catch (e) {
            throw e;
        }
    }

    public hasWallet(): boolean {
        return typeof this.ethereum !== 'undefined';
    }

    public async getPublicAddress(): Promise<string> {
        return await this.accounts[0].address;
    }

    public async createSignature(message: string): Promise<string> {
        const account = await this.accounts[0];
        return await this.web3.eth.sign(message, account.privateKey);
        // return await web3.personal(web3.toHex(message), account.privateKey
        // , (err: any, res: any) => console.log(err, res));
    }
}
