import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon,
    NgClass
  ],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackbarComponent implements OnInit {
  message: string = '';
  duration: number = 2000; // Default duration in milliseconds
  success: boolean = true; // Default to true for green background

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBarRef: MatSnackBarRef<SnackbarComponent>
  ) { }

  ngOnInit(): void {
    this.message = this.data.message;
    this.duration = this.data.duration || this.duration;
    this.success = this.data.success !== undefined ? this.data.success : this.success;
  }

  close(): void {
    this.snackBarRef.dismiss();
  }
}
