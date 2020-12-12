import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CurrencylistComponent } from './components/currencylist/currencylist.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'currency', component: CurrencylistComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
