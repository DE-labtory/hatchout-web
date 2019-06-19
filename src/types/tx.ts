export interface Tx {
    readonly timestamp: string;
    readonly txHash: string;
    readonly fromNickname: string;
    readonly fromAddress: string;
    readonly toNickname: string;
    readonly toAddress: string;
    readonly purpose: string;
    readonly txFee: number;
    readonly status: string;
}
