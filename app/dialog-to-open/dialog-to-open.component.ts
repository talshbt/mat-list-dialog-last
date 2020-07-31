import { Component, OnInit, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-to-open',
  templateUrl: './dialog-to-open.component.html',
  styleUrls: ['./dialog-to-open.component.css']
})
export class DialogToOpenComponent {message: string = ""
  arr:[] = null;
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogToOpenComponent>) {
    if (data) {
      this.arr  = data.arr;
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('300vw','300vw')
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

    // arr = ['x', 'y' , 'z']
  

  
  // selectedCountryControl = new FormControl(this.selectedCountry);

}