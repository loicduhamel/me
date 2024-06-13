import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gdpr-sensitization',
  templateUrl: './gdpr-sensitization.component.html',
  styleUrls: ['./gdpr-sensitization.component.css']
})
export class GdprSensitizationComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogGdprSensitizationComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container'
    });
  }
}


@Component({
  selector: 'dialog-gdpr-sensitization-dialog',
  templateUrl: 'gdpr-sensitization-dialog.html',
  standalone: true,
  styleUrls: ['./gdpr-sensitization.component.css']
})
export class DialogGdprSensitizationComponent {}
