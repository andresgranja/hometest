import { Injectable } from '@angular/core';
import { ShownCurrency } from '../models/showncurrency';

@Injectable({
    providedIn: 'root'
})
export class ShownService {
    private ShownCurrency: ShownCurrency = { id: '', shownCurrency: ''};
    private ShownCurrencyList: ShownCurrency[] = [
        {
            id: '0',
            shownCurrency: 'Select a value'
        },
        {
            id: 'code',
            shownCurrency: 'code'
        },
        {
            id: 'symbol',
            shownCurrency: 'symbol'
        }
    ];

    getShownCurrencyList() {
        return this.ShownCurrencyList;
    }

    getShownCurrency(id: string) {
        this.ShownCurrencyList.map( (show) => {
            if (show.id === id) {
                this.ShownCurrency = show;
            }
        });

        return this.ShownCurrency;
    }
}
