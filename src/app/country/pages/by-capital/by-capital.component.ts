import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent implements OnInit {
  constructor(private readonly countryService: CountryService) {}

  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  ngOnInit(): void {}

  search(term: string) {
    this.term = term;
    this.isError = false;
    this.countryService.searchCapital(this.term).subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }
  suggestion(event: any) {
    this.isError = false;
  }
}
