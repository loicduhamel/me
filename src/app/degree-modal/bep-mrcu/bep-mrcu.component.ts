import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bep-mrcu',
  templateUrl: './bep-mrcu.component.html',
  styleUrls: ['./bep-mrcu.component.css']
})
export class BepMrcuComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogBepMrcuComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container'
    });
  }
}


@Component({
  selector: 'dialog-bep-mrcu-dialog',
  templateUrl: 'dialog-bep-mrcu-dialog.html',
  standalone: true,
  styleUrls: ['./bep-mrcu.component.css']
})
export class DialogBepMrcuComponent {}
