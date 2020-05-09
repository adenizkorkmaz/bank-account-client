import {Transaction} from './transaction';


export class Account {
  public id: number;
  public userId: number;
  public balance: number;
  public currency: Currency;
  public current: boolean;
  public createdAt: Date;
  public lastUpdated: Date;
  public transactions: Transaction[];

  constructor() {
  }

}

export type Currency = 'EURO';

