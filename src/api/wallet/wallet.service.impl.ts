import {Service} from 'typedi';
import {WalletService} from '@/api/wallet/wallet.service';
import Web3 from 'web3';

@Service()
export class EthereumServiceImpl implements WalletService {
    public hasWallet(): boolean {
        if (typeof window.ethereum === 'undefined') {
            alert('Looks like you need a Dapp browser to get started.');
            alert('Consider installing MetaMask!');
            return false;
        }
        return true;
    }

    public async getPublicAddress(): Promise<string> {
        return await window.ethereum.enable()[0].address;

    }

    public async createSignature(userId: string): Promise<string> {
        const web3 = new Web3(window.ethereum);
        const account = await window.ethereum.enable()[0];
        return await web3.eth.sign(userId, account.privateKey);
    }
}
