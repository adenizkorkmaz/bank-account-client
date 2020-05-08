import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {AccountDetailsComponent} from './account-details/account-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'account', pathMatch: 'full'},
  {path: 'customers', component: CustomerListComponent},
  {path: 'createAccount/:userId', component: CreateAccountComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'accountDetails/:id', component: AccountDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
