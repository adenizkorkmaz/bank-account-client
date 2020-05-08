import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  customer: Customer;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customerService.getCustomerList()
      .subscribe(data => this.customers = data.content);
  }

  accountDetails(id: number) {
    this.router.navigate(['accountDetails', id]);
  }

  createAccount(userId: number) {
    this.router.navigate(['createAccount', userId]);
  }


}
