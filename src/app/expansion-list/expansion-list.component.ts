import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-expansion-list',
  templateUrl: './expansion-list.component.html',
  styleUrls: ['./expansion-list.component.css'],
  animations: [
    trigger('crossfade', [
      transition(':increment, :decrement', [
        style({ opacity: 0 }),
        animate('1s ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ExpansionListComponent implements OnInit {
  currentIndex = 0;
  images = ['assets/image/astek.png', 'assets/image/ineat.png'];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex === 0) ? 1 : 0;
    }, 2500);
  }

}
