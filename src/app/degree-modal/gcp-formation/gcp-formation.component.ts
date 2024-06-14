import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gcp-formation',
  templateUrl: './gcp-formation.component.html',
  styleUrls: ['./gcp-formation.component.css']
})
export class GcpFormationComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogGcpFormationComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container'
    });
  }
}


@Component({
  selector: 'dialog-gcp-formation-dialog',
  templateUrl: 'dialog-gcp-formation-dialog.html',
  standalone: true,
  styleUrls: ['./gcp-formation.component.css']
})
export class DialogGcpFormationComponent {}
