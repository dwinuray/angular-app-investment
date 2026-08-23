import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.scss',
})
export class UserInput {

  @Output() calculate = new EventEmitter<{
    initialInvestment: number, 
    duration: number, 
    expectedReturn: number, 
    annualInvestment: number
  }>();

  // properties 
  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.annualInvestment
    })
  }
}
