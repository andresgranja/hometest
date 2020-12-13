import { Injectable } from '@angular/core';
import { ShowCents } from '../models/showcents';

@Injectable({
    providedIn: 'root'
})
export class ShowCentsService {
    private showCents: ShowCents = { id: '', showCents: ''};
    private showCentsList: ShowCents[] = [
        {
            id: '0',
            showCents: 'Select a value'
        },
        {
            id: '4.0',
            showCents: 'true'
        },
        {
            id: '4.0-0',
            showCents: 'false'
        }
    ];

    getShowCentsList() {
        return this.showCentsList;
    }

    getShowCents(id: string) {
        this.showCentsList.map( (show) => {
            if (show.id === id) {
                this.showCents = show;
            }
        });

        return this.showCents;
    }
}
