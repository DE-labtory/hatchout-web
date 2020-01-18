export interface WalletService {
    hasWallet(): boolean;
    getPublicAddress(): Promise<string>;
    createSignature(userId: string): Promise<string>;
}
