import { Injectable } from '@angular/core';
import { SymbolC } from '../models/symbol';

@Injectable({
    providedIn: 'root'
})
export class SymbolService {
    private symbol: SymbolC = { id: 0, symbol: ''};
    private symbolList: SymbolC[] = [
        {
            id: 0,
            symbol: 'Select a value'
        },
        {
            id: 1,
            symbol: 'After Price'
        },
        {
            id: 2,
            symbol: 'Before Price'
        }
    ];

    getShowCentsList() {
        return this.symbolList;
    }

    getShowCents(id: number) {
        this.symbolList.map( (show) => {
            if (show.id === id) {
                this.symbol = show;
            }
        });

        return this.symbol;
    }
}
