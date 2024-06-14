import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tp-cdi',
  templateUrl: './tp-cdi.component.html',
  styleUrls: ['./tp-cdi.component.css']
})
export class TpCdiComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogTpCdiComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container'
    });
  }
}


@Component({
  selector: 'dialog-tp-cdi-dialog',
  templateUrl: 'dialog-tp-cdi-dialog.html',
  standalone: true,
  styleUrls: ['./tp-cdi.component.css']
})
export class DialogTpCdiComponent {}
