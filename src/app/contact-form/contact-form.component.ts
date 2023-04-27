import { Component, OnInit } from '@angular/core';
import { Transmitter } from './transmitter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  transmitter = new Transmitter();
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.openSnackBar()
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SubmitSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      panelClass: ['green-snackbar']
    });
  }

}

@Component({
  selector: 'snack-bar-component-submit-snack',
  templateUrl: 'snack-bar-component-submit-snack.html',
  styles: [`
    :host {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .aligned {
      display: flex;
      align-items: center;
    }
    .valid_img {
      margin-right: 5%;
      min-width: 60px;
      min-height: 60px;
      max-width: 60px;
      max-height: 60px;
    }
    .snack_bar_title {
      color: white;
      font-size: large;
    }
    .snack_bar_content {
      float: right;
      color: white;
    }
  `],
})
export class SubmitSnackBarComponent {}
