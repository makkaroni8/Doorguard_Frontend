import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SnackbarService} from "../../services/snackbarservice";

@Component({
  selector: 'app-door-open-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatInput,
    FormsModule,
    MatDialogActions,
    MatButton,
    HttpClientModule
  ],
  templateUrl: './door-open-dialog.component.html',
  styleUrl: './door-open-dialog.component.css'
})
export class DoorOpenDialogComponent {
  code: string = '';

  constructor(
    public dialogRef: MatDialogRef<DoorOpenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onOpenClick(): void {
    console.log('Code:', this.code);
    this.http.post('api/unlock-door/' + this.code, {},
      {responseType: 'text'}).subscribe(
      () => {
        console.log('Door successfully unlocked.');
        this.snackbarService.openSnackbar('Success: TÜr erfolgreich geöffnet',
          3000, true);
      },
      error => {
        console.error('Error occurred while unlocking door:', error);
        this.snackbarService.openSnackbar('ERROR: Tür konnte nicht geöffnet werden',
          3000, false);
      }
    );
    this.dialogRef.close();
  }

  sendCodeToBackend(code: String) {

  }
}
