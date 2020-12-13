import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country';
import { FormatService } from '../../services/format.service';
import { Format } from '../../models/format';
import { Currency } from '../../models/currency';
import { ShowCents } from '../../models/showcents';
import { ShowCentsService } from '../../services/showcents.service';
import { SymbolC } from '../../models/symbol';
import { SymbolService } from '../../services/symbol.service';
import { ShownCurrency } from '../../models/showncurrency';
import { ShownService } from '../../services/shown.service';
import { CurrencyService } from '../../services/currency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-add',
  templateUrl: './currency-add.component.html'
})
export class CurrencyAddComponent implements OnInit {

  country: Country = { id: 0, country: '', code: '', currency: '', symbol: '' };
  countries: Country[] = [];

  formats: Format[] = [];
  showCentsList: ShowCents[] = [];
  symbol: SymbolC[] = [];
  shown: ShownCurrency[] = [];
  currencyFormat: Currency = { idCurrency: '', formatCurrency: 0, showCents: '0', symbolBefore: 0, idCountry: 0, shownCurrency: '0'};

  constructor(
              private router: Router,
              private countryService: CountryService,
              private formatService: FormatService,
              private showCentsService: ShowCentsService,
              private symbolService: SymbolService,
              private shownCurrencyService: ShownService,
              private currencyService: CurrencyService
            ) { }

  ngOnInit() {
    this.loadFeatures();
  }

  loadCountry(id: number) {
    this.country = this.countryService.getCountry(Number(id));
    this.currencyFormat.idCurrency = this.country.code + this.country.id;
  }

  loadFeatures() {
    this.countries = this.countryService.getCountries();
    this.formats = this.formatService.getFormats();
    this.showCentsList = this.showCentsService.getShowCentsList();
    this.symbol = this.symbolService.getShowCentsList();
    this.shown = this.shownCurrencyService.getShownCurrencyList();
  }

  saveCurrency() {
    const res = this.currencyService.saveCurrency(this.currencyFormat);
    if (res) {
      this.router.navigate(['/currency-list']);
      alert('Item Added...');
    } else { alert('Warning, item has already been added'); }
  }

}
