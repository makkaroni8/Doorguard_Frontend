import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {DatePipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";

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
    NgIf
  ],
  templateUrl: './codes-table.component.html',
  styleUrl: './codes-table.component.css'
})
export class CodesTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'password', 'onetimePassword', 'onedayPassword', 'creationDate', 'expirationDate', 'actions'];
  dataSource!: MatTableDataSource<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllCodes();
  }

  getAllCodes(): void {
    this.http.get<any[]>('http://localhost:8080/get-all-codes').subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      },
      error => {
        console.log('Error occurred while fetching data:', error);
      }
    );
  }

  removeCode(id: number): void {
    // Implementiere die Logik zum Entfernen eines Codes
  }

  deactivateCode(id: number): void {
    // Implementiere die Logik zum Deaktivieren eines Codes
  }

  activateCode(id: number): void {
    // Implementiere die Logik zum Aktivieren eines Codes
  }
}
