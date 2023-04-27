import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bep-mrcu',
  templateUrl: './bep-mrcu.component.html',
  styleUrls: ['./bep-mrcu.component.css']
})
export class BepMrcuComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogBepMrcuComponent);
  }
}


@Component({
  selector: 'dialog-bep-mrcu-dialog',
  templateUrl: 'dialog-bep-mrcu-dialog.html',
  styleUrls: ['./bep-mrcu.component.css']
})
export class DialogBepMrcuComponent {}
