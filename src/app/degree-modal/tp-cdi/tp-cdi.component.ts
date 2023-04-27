import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tp-cdi',
  templateUrl: './tp-cdi.component.html',
  styleUrls: ['./tp-cdi.component.css']
})
export class TpCdiComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogTpCdiComponent);
  }
}


@Component({
  selector: 'dialog-tp-cdi-dialog',
  templateUrl: 'dialog-tp-cdi-dialog.html',
  styleUrls: ['./tp-cdi.component.css']
})
export class DialogTpCdiComponent {}
