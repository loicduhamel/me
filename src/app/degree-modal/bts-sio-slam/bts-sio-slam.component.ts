import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bts-sio-slam',
  templateUrl: './bts-sio-slam.component.html',
  styleUrls: ['./bts-sio-slam.component.css']
})
export class BtsSioSlamComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogBtsSioSlamComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container'
    });
  }
}


@Component({
  selector: 'dialog-bts-sio-slam-dialog',
  templateUrl: 'dialog-bts-sio-slam-dialog.html',
  standalone: true,
  styleUrls: ['./bts-sio-slam.component.css']
})
export class DialogBtsSioSlamComponent {}
