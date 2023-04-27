import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-list',
  templateUrl: './expansion-list.component.html',
  styleUrls: ['./expansion-list.component.css']
})
export class ExpansionListComponent implements OnInit {

  public items: string[] = [ "Item 1", "Item 2", "Item 3", "Item 4"];
  public toggle : boolean[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
