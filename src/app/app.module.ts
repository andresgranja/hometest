import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CurrencyListComponent, ShiftPosition } from './components/currency-list/currency-list.component';
import { CurrencyAddComponent } from './components/currency-add/currency-add.component';
import { CurrencyEditComponent } from './components/currency-edit/currency-edit.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';

import { SortDirective } from './sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CurrencyListComponent,
    CurrencyAddComponent,
    CurrencyEditComponent,
    CurrencyDetailsComponent,
    ShiftPosition,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
