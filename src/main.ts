import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChangeColorComponent } from './app/change-color/change-color.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChangeColorComponent],
  template: `
   <app-change-color>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
