import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  fcData = {
    name: 'Cup' as string,
    description: 'Developer`s Cup' as string,
    price: 'Priceless' as string,
    categories: {
      RedCup: 'Red Cup',
      BlueCup: 'Blue Cup',
      GreenCup: 'Green Cup',
    },
    isAvalible: true as boolean,
  };
}
