import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccountCreate} from './accountCreate';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8080/accounts';

  constructor(private http: HttpClient) {
  }

  getAccount(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAccount(accountCreate: AccountCreate): Observable<any> {
    return this.http.post(`${this.baseUrl}`, accountCreate);
  }

}
