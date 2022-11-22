import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  events1: any[];

  events2: any[];

  ngOnInit() {
    this.events1 = [
      {
        name: 'Selena Baumann',
        date: '08.12.2022 10:45',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      {
        name: 'Selena Baumann',
        date: '10.12.2022 18:32',
        icon: PrimeIcons.COG,
        color: '#673AB7',
      },
      {
        name: 'Mirta Meier',
        date: '13.12.2022 10:22',
        icon: PrimeIcons.ENVELOPE,
        color: '#FF9800',
      },
      {
        name: 'Mirta Meier',
        date: '15.12.2022 10:45',
        icon: PrimeIcons.CHECK,
        color: '#607D8B',
      },
    ];

    this.events2 = ['2020', '2021', '2022', '2023'];
  }
}
