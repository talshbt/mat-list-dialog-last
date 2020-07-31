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

  constructor(private dialog: MatDialog,
    private snackBar: MatSnackBar) {
  }

  public constructDialog<T>(TCtor: new (...args: any[]) => T,data: any): MatDialogRef<T,any> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(TCtor, dialogConfig);
    return dialogRef;
 }

 openGenericDialog() {
   const dialogRef = this.constructDialog(ConfirmationDialog,{
           data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
   });
 }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
    const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.snackBar.open('Closing snack bar in a few seconds', 'Fechar', {
          duration: 2000,
        });
      }
    });
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent,{
      data:{
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }
}



/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// var dates = []

//     var now = moment().startOf('day').hour(10).minute(30).seconds(0)
//     var deadline = moment().hour(19).minute(0).seconds(0)
//     //dates.push(now.format('HH:mm A'))
//     while (now.diff(deadline) < 0) {
//       if (now >= moment(now).hour(10)) {
//         dates.push(now.format('hh:mm A'))
//       }
//       now.add(12, 'minutes');
//     }