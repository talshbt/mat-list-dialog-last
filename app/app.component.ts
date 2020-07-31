import { Component, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import {ConfirmationDialog} from './confirmation-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { DialogToOpenComponent } from './dialog-to-open/dialog-to-open.component';


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
    const dialogRef = this.dialog.open(DialogToOpenComponent,{
      width:'400px',
      height:'470px',
      data:{
        message: 'HelloWorld',
        arr:this.arr,
        buttonText: {
          cancel: 'Done',
          add: '+'
        }
      },
    });
  }
}



