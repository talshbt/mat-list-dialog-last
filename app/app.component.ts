import { Component, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import {ConfirmationDialog} from './confirmation-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  version = VERSION;
  arr = ['x','y','z']

  constructor(private dialog: MatDialog,
    private snackBar: MatSnackBar) {
  }


  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      width:'1000px',
      height:'400px',
      data:{
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }
}



