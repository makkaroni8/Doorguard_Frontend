import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {DatePipe, NgClass, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {SnackbarService} from "../../services/snackbarservice";

@Component({
  selector: 'app-codes-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatIcon,
    MatIconButton,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    DatePipe,
    HttpClientModule,
    TitleCasePipe,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './codes-table.component.html',
  styleUrl: './codes-table.component.css'
})
export class CodesTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'password', 'onetimePassword', 'onedayPassword', 'creationDate', 'expirationDate', 'activated', 'actions'];
  dataSource!: MatTableDataSource<any>;

  constructor(private http: HttpClient,
              private snackbarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.getAllCodes();
  }

  getAllCodes(): void {
    this.http.get<any[]>('http://localhost:8080/get-all-codes').subscribe(
      data => {
        data.reverse();
        this.dataSource = new MatTableDataSource(data);
      },
      error => {
        console.log('Error occurred while fetching data:', error);
        this.snackbarService.openSnackbar('Error: Konnte Daten nicht laden', 3000, false);
      }
    );
  }

  removeCode(id: number): void {
    this.http.delete(`http://localhost:8080/delete-code/${id}`,
      {responseType: 'text'}).subscribe(
      () => {
        console.log('Code successfully removed.');
        this.getAllCodes();
        this.snackbarService.openSnackbar('Success: Code erfolgreich entfernt', 3000, true);
      },
      error => {
        console.error('Error occurred while removing code:', error);
        this.snackbarService.openSnackbar('Error: Code konnte nicht entfernt werden', 3000, false);
      }
    );
  }

  deactivateCode(id: number): void {
    this.http.put(`http://localhost:8080/deactivate-code/${id}`,
      {}, {responseType: 'text'}).subscribe(
      () => {
        console.log('Code successfully deactivated.');
        this.getAllCodes();
        this.snackbarService.openSnackbar('Success: Code erfolgreich deaktiviert', 3000, true);
      },
      error => {
        console.error('Error occurred while deactivating code:', error);
        this.snackbarService.openSnackbar('Error: Code konnte nicht deaktiviert werden', 3000, false);
      }
    );
  }

  activateCode(id: number): void {
    this.http.put(`http://localhost:8080/activate-code/${id}`,
      {}, {responseType: 'text'}).subscribe(
      () => {
        console.log('Code successfully activated.');
        this.getAllCodes();
        this.snackbarService.openSnackbar('Success: Code erfolgreich aktiviert', 3000, true);
      },
      error => {
        console.error('Error occurred while activating code:', error);
        this.snackbarService.openSnackbar('Error: Code konnte nicht aktiviert werden', 3000, false);
      }
    );
  }
}
