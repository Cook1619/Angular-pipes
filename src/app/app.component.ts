import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  currency: string;

  onCurrencyChange(value: string){
    this.currency = value;
  }

  onDateChange(value: string){
    this.date = value;
  }

  onNameChange(value: string){
    this.name = value
  }
}
