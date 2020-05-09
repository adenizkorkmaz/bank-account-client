import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerResponse} from '../model/customerResponse';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) {
  }

  getCustomerList(): Observable<CustomerResponse> {
    return this.http.get<CustomerResponse>(`${this.baseUrl}`);
  }
}
