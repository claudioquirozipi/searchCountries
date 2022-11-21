import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl: string = 'https://restcountries.com/v3.1/';
  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}name/${term}`);
  }

  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}capital/${term}`);
  }
  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.baseUrl}region/${term}`;
    return this.http.get<Country[]>(url).pipe(tap(console.log));
  }
  searchCountryByCode(code: string): Observable<Country[]> {
    const url = `${this.baseUrl}alpha/${code}`;
    return this.http.get<Country[]>(url);
  }
}
