import {Component, OnInit} from '@angular/core';
import {AccountService} from '../account.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountCreate} from '../accountCreate';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  error: HttpErrorResponse;
  accountCreate: AccountCreate = new AccountCreate();
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountCreate.customerId = this.route.snapshot.params['userId'];
  }

  newAccount(): void {
    this.submitted = false;
    this.accountCreate = new AccountCreate();
  }

  save() {
    this.accountService.createAccount(this.accountCreate)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
          this.accountCreate = new AccountCreate();
          this.gotoList();
        },
        error => {
          this.submitted = false;
          this.error = error;
          console.log(error);
        });
  }

  onSubmit() {
    this.save();
  }


  gotoList() {
    this.router.navigate(['/customers']);
  }

}
