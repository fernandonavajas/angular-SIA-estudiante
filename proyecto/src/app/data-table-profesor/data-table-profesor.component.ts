import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableProfesorDataSource } from './data-table-profesor-datasource';

@Component({
  selector: 'app-data-table-profesor',
  templateUrl: './data-table-profesor.component.html',
  styleUrls: ['./data-table-profesor.component.css']
})
export class DataTableProfesorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableProfesorDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nombre','anio','semestre','aprobados','reprobados','nota','desviacion'];

  ngOnInit() {
    this.dataSource = new DataTableProfesorDataSource(this.paginator, this.sort);
  }
}
