import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentInput } from './investment-input.model';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('investment-calculator');
  // resultsData?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[];

  resultsData = signal<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[] | undefined>(undefined);

  onCalculateInvestmentResults(data: InvestmentInput) {

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

    // this.resultsData = annualData;
    this.resultsData.set(annualData);
  }
}
