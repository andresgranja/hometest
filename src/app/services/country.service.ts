import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private country: Country = { id: 0, country: '', code: '', currency: '', symbol: '' };

    private countries: Country[] = [
        {
            id: 0,
            country: 'Select a country...',
            code: '',
            currency: '',
            symbol: '',
        },
        {
            id: 1,
            country: 'United States',
            code: 'USD',
            currency: 'United States Dollar',
            symbol: '$',
        },
        {
            id: 2,
            country: 'Argentina',
            code: 'ARS',
            currency: 'Argentine Peso',
            symbol: '$',
        },
        {
            id: 3,
            country: 'Australia',
            code: 'AUD',
            currency: 'Australian Dollar',
            symbol: '$',
        },
        {
            id: 4,
            country: 'Brazil',
            code: 'BRL',
            currency: 'Brazilian Real',
            symbol: 'R$',
        },
        {
            id: 5,
            country: 'Spain',
            code: 'EUR',
            currency: 'EURO',
            symbol: '€',
        },
        {
            id: 6,
            country: 'Germany',
            code: 'EUR',
            currency: 'EURO',
            symbol: '€',
        },
        {
            id: 7,
            country: 'United kingdom',
            code: 'GBP',
            currency: 'Pound Sterling',
            symbol: '£',
        }
      ];

      constructor() {
      }

      getCountries() {
        return this.countries;
      }

      getCountry(idCountry: number): any {
          this.countries.map((country) => {
            if (country.id === idCountry) {
                this.country = country;
            }});
          return this.country;
    }
}
