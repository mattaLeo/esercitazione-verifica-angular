import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { CommonModule } from '@angular/common';
import { SecondComponentComponent } from './second-component/second-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThirdComponentComponent, SecondComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Matta';
}
