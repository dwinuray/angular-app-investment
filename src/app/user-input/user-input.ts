import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.scss',
})
export class UserInput {

  @Output() calculate = new EventEmitter<InvestmentInput>();

  // properties 
  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.annualInvestment()
    });

    this.initialInvestment.set('0');
    this.annualInvestment.set('0');
    this.expectedReturn.set('50');
    this.duration.set('10');
  }
}
