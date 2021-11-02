import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {
  @Input() idx = 0;
  @Input() stat = '';
  @Input() isHidden1 = true;
  @Input() isHidden2 = true;
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
  @Input() areaDisplay = '';
  @Input() populationDisplay = '';
  @Input() gdpDisplay = '';

  @Output() clickEventHandler = new EventEmitter<boolean>();
  @Output() clickEventHandler2 = new EventEmitter<boolean>();
  @Output() clickEventHandler3 = new EventEmitter<boolean>();
  @Output() clickEventHandler4 = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.clickEventHandler.emit(true);
  }

  onButtonClick2() {
    this.clickEventHandler2.emit(true);
  }

  onButtonClick3() {
    this.clickEventHandler3.emit(true);
  }

  onButtonClick4() {
    this.clickEventHandler4.emit(true);
  }
}
