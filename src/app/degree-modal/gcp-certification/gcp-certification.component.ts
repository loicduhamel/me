import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gcp-certification',
  templateUrl: './gcp-certification.component.html',
  styleUrls: ['./gcp-certification.component.css']
})
export class GcpCertificationComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogGcpCertificationComponent);
  }
}


@Component({
  selector: 'dialog-gcp-certification-dialog',
  templateUrl: 'dialog-gcp-certification-dialog.html',
  styleUrls: ['./gcp-certification.component.css']
})
export class DialogGcpCertificationComponent {}
