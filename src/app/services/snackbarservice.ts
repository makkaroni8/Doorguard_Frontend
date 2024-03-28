import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackbarComponent} from "../snackbar/snackbar.component";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackbar(message: string, duration: number = 2000, success: boolean): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: duration,
      data: { message: message, success: success }
    });
  }
}
