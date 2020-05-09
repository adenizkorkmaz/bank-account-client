import {Account} from './account';


export class Customer {
  public id: number;
  public name: string;
  public createdAt: Date;
  public accountList: Account[];

  constructor() {}

}
