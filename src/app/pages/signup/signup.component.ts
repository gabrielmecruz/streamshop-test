import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBasicComponent } from 'src/app/ng-material/mat-basic/mat-basic.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('modal') modal?: ElementRef
  public saved: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal(): void {
    const dialogRef = this.dialog.open(MatBasicComponent);

    dialogRef.afterOpened().subscribe((_r: any) => {
      setTimeout(() => {
        dialogRef.close();
      }, 2500)
    })
  }
}
