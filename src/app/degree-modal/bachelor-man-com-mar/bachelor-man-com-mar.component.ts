import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bachelor-man-com-mar',
  templateUrl: './bachelor-man-com-mar.component.html',
  styleUrls: ['./bachelor-man-com-mar.component.css']
})
export class BachelorManComMarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogBachelorManComMarComponent);
  }
}


@Component({
  selector: 'dialog-bachelor-man-com-mar-dialog',
  templateUrl: 'dialog-bachelor-man-com-mar-dialog.html',
  styleUrls: ['./bachelor-man-com-mar.component.css']
})
export class DialogBachelorManComMarComponent {}
