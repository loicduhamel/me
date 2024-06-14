import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-environment-sensitization',
  templateUrl: './environment-sensitization.component.html',
  styleUrls: ['./environment-sensitization.component.css']
})
export class EnvironmentSensitizationComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogEnvironmentSensitizationComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container'
    });
  }
}


@Component({
  selector: 'dialog-environment-sensitization-dialog',
  templateUrl: 'environment-sensitization-dialog.html',
  standalone: true,
  styleUrls: ['./environment-sensitization.component.css']
})
export class DialogEnvironmentSensitizationComponent {}
