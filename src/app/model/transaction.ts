export class Transaction {
  public id: number;
  public accountId: number;
  public transactionType: TransactionType;
  public transactionAmount: number;
  public transactionTime: Date;
  public message: string;

  constructor() {}

}

export type TransactionType = 'DEPOSIT' | 'WITHDRAW';
