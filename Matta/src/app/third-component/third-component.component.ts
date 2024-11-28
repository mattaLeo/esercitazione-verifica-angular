import { Component } from '@angular/core';
import { FourthComponentComponent } from '../fourth-component/fourth-component.component';

@Component({
  selector: 'app-third',
  imports: [FourthComponentComponent],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {
  parola = "terzo"
}
