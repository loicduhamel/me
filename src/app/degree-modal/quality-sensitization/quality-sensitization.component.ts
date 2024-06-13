import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quality-sensitization',
  templateUrl: './quality-sensitization.component.html',
  styleUrls: ['./quality-sensitization.component.css']
})
export class QualitySensitizationComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogQualitySensitizationComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container'
    });
  }
}


@Component({
  selector: 'dialog-quality-sensitization-dialog',
  templateUrl: 'quality-sensitization-dialog.html',
  standalone: true,
  styleUrls: ['./quality-sensitization.component.css']
})
export class DialogQualitySensitizationComponent {}
