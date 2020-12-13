import { Injectable } from '@angular/core';
import { Currency } from '../models/currency';
import { CountryService } from './country.service';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    private currencyDetail: Currency = {idCurrency: '', formatCurrency: 0, showCents: '', symbolBefore: 0, shownCurrency: '', idCountry: 0};
    private currency: Currency[] = [
        {
            idCurrency: 'USD1',
            formatCurrency: 1,
            showCents: '4.0-0',
            symbolBefore: 2,
            shownCurrency: 'code',
            idCountry: 1
        },
        {
            idCurrency: 'EUR5',
            formatCurrency: 2,
            showCents: '4.0',
            symbolBefore: 1,
            shownCurrency: 'symbol',
            idCountry: 5
        }
    ];

    constructor(
        private countryService: CountryService
    ) { }

    getCurrency() {
        return this.currency;
    }

    getCurrencyDetail(id: string) {
        this.currency.map( (currency) => {
            if (currency.idCurrency === id) {
                this.currencyDetail = currency;
            }
        });

        return this.currencyDetail;
    }

    saveCurrency(data: Currency) {
        let res: boolean;
        const resCountry = this.currency.filter( c => c.idCurrency === data.idCurrency ).length;
        if (resCountry === 0) {
            this.currencyDetail = {
                idCurrency: data.idCurrency,
                formatCurrency: Number(data.formatCurrency),
                showCents: data.showCents,
                symbolBefore: Number(data.symbolBefore),
                shownCurrency: 'symbol',
                idCountry: Number(data.idCountry)
            };
            this.currency.push(this.currencyDetail);
            res = true;
        } else { res = false; }

        return res;
    }

    deleteCurrency(id: string) {
        let res: boolean;
        this.currency.map((c, index) => {
            if (c.idCurrency === id) {
                this.currency.splice(index, 1);
                res = true;
            } else { res = false; }
        });

        return res;

    }

    updateCurrency(data: Currency) {
        let res: boolean;
        this.currency.map( (currency) => {
            if (currency.idCurrency === data.idCurrency) {
                currency.formatCurrency = Number(data.formatCurrency);
                currency.showCents = data.showCents;
                currency.shownCurrency = data.shownCurrency;
                currency.symbolBefore = Number(data.symbolBefore);
                res = true;
            }
        });
        return res;
    }
}
