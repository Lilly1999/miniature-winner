import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
// [x: string]: any;
  constructor(private dialogRef:MatDialog) { }

  ngOnInit(): void {
    this.dialogRef.closeAll()
  }

  move(e:any, previous: any, current: any, next: any) {
    var length = current.value.length;
    var maxlength = current.getAttribute('maxlength');
    if (length == maxlength) {
      if (next != "") {
        next.focus();
      }
    }
    if (e.key === "Backspace") {
      if (previous != "") {
        previous.focus();
      }
    }

  }

}
