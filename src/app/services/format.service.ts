import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Format } from '../models/format';

@Injectable({
    providedIn: 'root'
})
export class FormatService {

    private format: Format;
    private formats: Format[] = [
        {
            id: 0,
            format: 'Select a value'
        },
        {
            id: 1,
            format: '#,###.##'
        },
        {
            id: 2,
            format: '#.###,##'
        }
    ];

    getFormats() {
        return this.formats;
    }

    getFormat(id: number) {
        this.formats.map( (format) => {
            if (format.id === id) {
                this.format = format;
            }
        });

        return this.format;
    }
}
