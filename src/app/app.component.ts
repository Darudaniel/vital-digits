import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SriComponent } from './sri/sri.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SriComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vital-digits';
}