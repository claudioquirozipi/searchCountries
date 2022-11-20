import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  country!: Country;
  id: string = '';

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params: any) =>
          this.countryService.searchCountryByCode(params.id)
        ),
        tap(console.log)
      )
      .subscribe((resp) => (this.country = resp[0]));
  }
}
