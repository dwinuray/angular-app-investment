import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formestimate',
  imports: [CommonModule],
  templateUrl: './formestimate.html',
  styleUrl: './formestimate.scss',
})
export class Formestimate {

  @Output() formGroup: EventEmitter<any> = new EventEmitter();
  
  initialInvestment = '';
  annualInvestment = '';
  duration = '';
  expected = '';


  onSubmit(): void {

  }
}
