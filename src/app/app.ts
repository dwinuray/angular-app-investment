import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Table } from './table/table';
import { Formestimate } from './formestimate/formestimate';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Table, Formestimate],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('investment-calculator');
}
