import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountrydetailComponent } from './components/countrydetail/countrydetail.component';
import { AllcountriesComponent } from './components/allcountries/allcountries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountrydetailComponent,
    AllcountriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
