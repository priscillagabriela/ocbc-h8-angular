import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.css']
})
export class AllcountriesComponent implements OnInit {
  @Input() isAllCountries = false;
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
  @Input() length = 0;
  @Input() areaDisplay = '';
  @Input() populationDisplay = '';
  @Input() gdpDisplay = '';
  //idx = 0;

  @Output() clickEventHandler = new EventEmitter<boolean>();
  @Output() clickEventDetail = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.clickEventHandler.emit(true);
  }

  onButtonClickDetail(idx: string) {
    this.clickEventDetail.emit(idx);
  }
}
