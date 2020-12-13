import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CurrencyAddComponent } from './components/currency-add/currency-add.component';
import { CurrencyEditComponent } from './components/currency-edit/currency-edit.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'currency-list', component: CurrencyListComponent },
    { path: 'currency-add', component: CurrencyAddComponent },
    { path: 'currency-edit/:id/:id2', component: CurrencyEditComponent },
    { path: 'currency-detail', component: CurrencyDetailsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
