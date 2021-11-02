import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() isHome = true;
  @Input() areaDisplay = '';
  @Input() populationDisplay = '';
  @Input() gdpDisplay = '';
  @Input() countries = [{
    name: "",
    capital: "",
    area: 0,
    population: 0,
    gdp: 0,
    currency: "",
    description: "",
    image: ""
}]
@Input() countriesSortArea = [{
  name: "",
  capital: "",
  area: 0,
  population: 0,
  gdp: 0,
  currency: "",
  description: "",
  image: ""
}]
@Input() countriesSortPopulation = [{
  name: "",
  capital: "",
  area: 0,
  population: 0,
  gdp: 0,
  currency: "",
  description: "",
  image: ""
}]

  @Output() clickEventHandler = new EventEmitter<boolean>();
  @Output() clickEventDetail = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.clickEventHandler.emit(true);
  }
  onButtonClickDetail(countryName: string) {
    this.clickEventDetail.emit(countryName);
  }
}
