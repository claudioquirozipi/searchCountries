import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryComponent } from './pages/country/country.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryComponent,
  ],
  imports: [CommonModule],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryComponent,
  ],
})
export class CountryModule {}
