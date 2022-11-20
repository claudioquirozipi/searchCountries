import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css'],
})
export class ByCountryComponent implements OnInit {
  constructor(private readonly countryService: CountryService) {}

  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  ngOnInit(): void {}

  search(term: string) {
    this.term = term;
    this.isError = false;
    this.countryService.searchCountry(this.term).subscribe(
      (data) => {
        this.countries = data;
      },
      (_) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }
  suggestion(event: any) {
    this.isError = false;
  }
}
