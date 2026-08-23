import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('investment-calculator');

  onCalculateInvestmentResults(data: {
    initialInvestment: number, 
    duration: number, 
    expectedReturn: number, 
    annualInvestment: number}) {

    const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for ( let i = 0; i < duration; i++ ) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year
      });
    }

    // return annualData;

    console.log(annualData);
  }
}
