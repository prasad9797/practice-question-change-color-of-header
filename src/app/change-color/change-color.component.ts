import { Component } from '@angular/core';

@Component({
  selector: 'app-change-color',
  standalone: true,
  imports: [],
  templateUrl: './change-color.component.html',
  styleUrl: './change-color.component.css',
})
export class ChangeColorComponent {
  readonly data = [
    {
      title: 'Directives',
      body: 'The Angular directive helps us to manipulate the DOM. You can change the appearance, behavior, or layout of a DOM element using the directives. They help you to extend HTML. The Angular directives are classified into three categories based on how they behave.  They are Component, Structural and Attribute Directives',
      color: 'red',
    },
    {
      title: 'Directives',
      body: 'The Angular directive helps us to manipulate the DOM. You can change the appearance, behavior, or layout of a DOM element using the directives. They help you to extend HTML. The Angular directives are classified into three categories based on how they behave.  They are Component, Structural and Attribute Directives',
      color: 'blue',
    },
    {
      title: 'Directives',
      body: 'The Angular directive helps us to manipulate the DOM. You can change the appearance, behavior, or layout of a DOM element using the directives. They help you to extend HTML. The Angular directives are classified into three categories based on how they behave.  They are Component, Structural and Attribute Directives',
      color: 'green',
    },
    {
      title: 'Directives',
      body: 'The Angular directive helps us to manipulate the DOM. You can change the appearance, behavior, or layout of a DOM element using the directives. They help you to extend HTML. The Angular directives are classified into three categories based on how they behave.  They are Component, Structural and Attribute Directives',
      color: 'black',
    },
  ];

  headerColor = '';

  setColor(color: string) {
    this.headerColor = this.headerColor.length === 0 ? color : '';
  }
}
