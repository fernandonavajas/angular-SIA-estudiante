import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableProfesorItem {
  nombre: string;
  anio: number;
  semestre: number;
  nota: number;
  desviacion:number;
  aprobados:number;
  reprobados:number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableProfesorItem[] = [
  {nombre: 'algorito y programacion',  anio:2015, semestre:1,aprobados:12,reprobados:3, nota:4.2, desviacion:0.2},
  {nombre: 'algorito y programacion',  anio:2015, semestre:2,aprobados:10,reprobados:2, nota:5.2, desviacion:0.2},
  {nombre: 'algorito y programacion',  anio:2016, semestre:1,aprobados:5,reprobados:0, nota:4.5, desviacion:0.2},
  {nombre: 'algorito y programacion',  anio:2016, semestre:2,aprobados:12,reprobados:4, nota:5.5, desviacion:0.2},
  {nombre: 'intrduccion a la ingenieria',  anio:2015, semestre:2,aprobados:12,reprobados:1, nota:4.2, desviacion:0.2},
];

/**
 * Data source for the DataTableProfesor view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableProfesorDataSource extends DataSource<DataTableProfesorItem> {
  data: DataTableProfesorItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableProfesorItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableProfesorItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableProfesorItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'anio': return compare(+a.anio, +b.anio, isAsc);
        case 'semestre': return compare(+a.semestre, +b.semestre, isAsc);
        case 'nota': return compare(+a.nota, +b.nota, isAsc);
        case 'desviacion': return compare(+a.desviacion, +b.desviacion, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
