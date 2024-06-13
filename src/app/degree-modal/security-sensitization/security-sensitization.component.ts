import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-security-sensitization',
  templateUrl: './security-sensitization.component.html',
  styleUrls: ['./security-sensitization.component.css']
})
export class SecuritySensitizationComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogSecuritySensitizationComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container'
    });
  }
}


@Component({
  selector: 'dialog-security-sensitization-dialog',
  templateUrl: 'security-sensitization-dialog.html',
  standalone: true,
  styleUrls: ['./security-sensitization.component.css']
})
export class DialogSecuritySensitizationComponent {}
