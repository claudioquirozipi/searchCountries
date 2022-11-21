import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActivated: string = '';
  countries: Country[] = [];
  isError: boolean = false;
  constructor(private readonly countryService: CountryService) {}

  activateRegion(region: string) {
    if (this.regionActivated === region) return;
    this.regionActivated = region;
    this.countryService
      .searchRegion(region)
      .subscribe((resp) => (this.countries = resp));
  }
}
