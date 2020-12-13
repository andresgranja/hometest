import { Component, ElementRef, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { CountryService } from '../../services/country.service';
import { FormatService } from '../../services/format.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Pipe({name: 'split'})
export class ShiftPosition implements PipeTransform {
  transform(items: any[], value: number, value2: string, value3: number): string {
    if (value2 === 'symbol' && value3 === 1) {
      return items.slice(1) + ' ' + items.slice(0, 1);
    } else if (value2 === 'code' && value3 === 1) {
      return items.slice(3) + ' ' + items.slice(0, 3);
    }
  }
}

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html'
})
export class CurrencyListComponent implements OnInit {

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;

  private data: any;
  private currency: any[] = [];
  private value: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private currencyService: CurrencyService,
    private countryService: CountryService,
    private formatService: FormatService
  ) { }

  ngOnInit() {
    this.value = 1354.76;
    this.currencyService.getCurrency().map( (c) => {
      this.data = {
        idCurrency: c.idCurrency,
        country: this.countryService.getCountry(c.idCountry).country,
        currencyDetail: this.countryService.getCountry(c.idCountry).currency,
        code: this.countryService.getCountry(c.idCountry).code,
        showCurrency: c.shownCurrency,
        format: this.formatService.getFormat(c.formatCurrency).id,
        symbol: c.symbolBefore,
        showCent: c.showCents,
        idCountry: c.idCountry
      },

      this.currency.push(this.data);
    });
  }

  onDelete(id: string) {
    const res = this.currencyService.deleteCurrency(id);
    if (res) {
      this.router.navigate(['/home']);
      alert('Deleted');
    } else {
      alert('Error, item no found');
    }

  }

  ExportTOExcel() {
    console.log(this.currency);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.currency);
    // const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.currency);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Settings.xlsx');
  }
}
