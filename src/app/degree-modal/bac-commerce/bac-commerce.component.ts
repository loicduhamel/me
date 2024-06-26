import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bac-commerce',
  templateUrl: './bac-commerce.component.html',
  styleUrls: ['./bac-commerce.component.css']
})
export class BacCommerceComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogBacCommerceComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container'
    });
  }
}


@Component({
  selector: 'dialog-bac-commerce-dialog',
  templateUrl: 'dialog-bac-commerce-dialog.html',
  standalone: true,
  styleUrls: ['./bac-commerce.component.css']
})
export class DialogBacCommerceComponent {}
