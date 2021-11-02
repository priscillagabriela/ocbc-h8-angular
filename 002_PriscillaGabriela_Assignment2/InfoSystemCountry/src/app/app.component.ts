import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InfoSystemCountry';
  isHome: boolean = true;
  isAllCountries: boolean = false;
  isDetail: boolean = false;
  countries:any = [
    {
      name: "United States",
      capital: "Washington D.C",
      area: 9833517,
      population: 331449281,
      gdp: 20937000,
      currency: "United States Dollar",
      description: "a country primarily located in North America thas is a federal republic of 50 states",
      image: "/assets/img/us.jpg"
    },
    {
      name: "China",
      capital: "Beijing",
      area: 9596960,
      population: 1446690770,
      gdp: 14720000,
      currency: "Renminbi",
      description: "a country in East Asia which is the world's most populous country",
      image: "/assets/img/china.jpg"
    },
    {
      name: "Japan",
      capital: "Tokyo",
      area: 377975,
      population: 125965076,
      gdp: 5065000,
      currency: "Japanese Yen",
      description: "an island country in East Asia, located in the northwest Pacific Ocean",
      image: "/assets/img/japan.jpg"
    },
    {
      name: "Russia",
      capital: "Moscow",
      area: 17098242,
      population: 146016918,
      gdp: 1483000,
      currency: "Russian Ruble",
      description: "a country that stretches over a vast expanse of eastern Europe and northern Asia",
      image: "/assets/img/russia.jpg"
    },
    {
      name: "Canada",
      capital: "Ottawa",
      area: 9984670,
      population: 38179638,
      gdp: 1643000,
      currency: "Canadian Dollar",
      description: "second largest country which occupying the northern two-fifths of the continent of North America",
      image: "/assets/img/canada.jpg"
    }
  ];
  length = Object.keys(this.countries).length;
  countryName = '';
  idx = 0;
  stat = '';
  isHidden1 = true;
  isHidden2 = true;

  countries2 = this.countries.slice(0);
  countriesSortArea :any[]=[] = this.countries.sort((first: { area: number; }, second: { area: number; }) => 0 - (first.area > second.area ? 1 : -1));
  countriesSortPopulation:any[]=[] = this.countries2.sort((first: { population: number; }, second: { population: number; }) => 0 - (first.population > second.population ? 1 : -1));
  // changeStatus (isAllCountries: string) {
  //   this.isHome = false;
  //   this.isAllCountries = (isAllCountries =="true");
  // }
    
     changeStatus1 (isAllCountries: boolean) {
       this.isHome = false;
       this.isAllCountries = isAllCountries;
       console.log(this.countriesSortPopulation)
       console.log(this.countriesSortArea)
     }

     changeStatus2 (isHome: boolean) {
      this.isAllCountries = false;
      this.isHome = isHome;
    }

    changeStatus3 (countryName: string) {
      this.isAllCountries = false;
      this.isDetail = true;
      this.countryName = countryName;
      this.idx = this.countries.findIndex((x: { name: string; }) => x.name === countryName);
      this.stat = "all countries"
      this.isHidden2 = false;
    }

    changeStatus4 (isHome: boolean) {
      this.isDetail = false;
      this.isHome = isHome;
    }

    changeStatus5 (isAllCountries: boolean) {
     this.isDetail = false;
     this.isAllCountries = isAllCountries;
   }

   changeStatus6 (countryName: string) {
    this.isHome = false;
    this.isDetail = true;
    this.countryName = countryName;
    this.idx = this.countries.findIndex((x: { name: string; }) => x.name === countryName);
    this.stat = "home";
    this.isHidden1 = false;
  }

  backHome (isHome: boolean) {
    this.isDetail = false;
    this.isHome = isHome;
  }

  backAllCountries (isAllCountries: boolean) {
    this.isDetail = false;
    this.isAllCountries = isAllCountries;
  }

}
