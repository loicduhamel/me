import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-master-eii',
  templateUrl: './master-eii.component.html',
  styleUrls: ['./master-eii.component.css']
})
export class MasterEiiComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogMasterEiiComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container'
    });
  }
}

@Component({
  selector: 'dialog-master-eii-dialog',
  templateUrl: 'dialog-master-eii-dialog.html',
  standalone: true,
  styleUrls: ['./master-eii.component.css']
})
export class DialogMasterEiiComponent {}
