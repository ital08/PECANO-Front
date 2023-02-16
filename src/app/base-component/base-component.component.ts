import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseComponentService } from './base-component.service';
import { MatTableDataSource } from '@angular/material/table';
import { Paginator, Trabajadores } from '../shared/model/base-component.model';
import { WorkerTypes } from '../shared/enums/worker.model';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css'],
})
export class BaseComponentComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  form?: FormGroup;
  loading: boolean = false;
  pageIndex = 0;
  pageSize = 10;
  length: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  dataSource?: any;
  WorkerTypes = [
    { id: 0, name: 'Obrero' },
    { id: 1, name: 'Supervisor' },
    { id: 2, name: 'Gerente' },
  ];
  displayedColumns = [
    'dni',
    'horasTrabajadas',
    'diasTrabajados',
    'faltas',
    'sueldo',
    'tipodeTrabajador',
  ];
  constructor(private baseComponentService: BaseComponentService) {
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.search();
  }

  initForm() {
    this.form = new FormGroup({
      tipoTrabajador: new FormControl(undefined),
      dni: new FormControl(undefined),
    });
  }
  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.search();
  }
  search() {
    this.loading = true;
    var values = this.form?.value;
    values.pageIndex = this.pageIndex;
    values.pageSize = this.pageSize;
    this.baseComponentService.getTrabajadores(values).subscribe(
      (resp: Paginator) => {
        this.paginator!._intl.itemsPerPageLabel = 'Items por página:';
        this.paginator!._intl.nextPageLabel = 'siguiente';
        this.paginator!._intl.previousPageLabel = 'anterior';
        this.paginator!.pageIndex = resp.pageIndex;
        this.paginator!.pageSize = resp.pageSize;
        this.paginator!.length = resp.totalCount;
        this.dataSource = new MatTableDataSource<Trabajadores>(
          resp.trabajadores
        );
        this.loading = false;
      },
      (e: any) => {
        this.loading = false;
      }
    );
  }

  getWorkType(WorkType: number) {
    const argumentos = Object.values(WorkerTypes).filter(
      (v) => typeof v === 'number'
    ) as number[];
    const argumentoEncontrado = argumentos.find((a) => a === WorkType);
    return argumentoEncontrado
      ? (WorkerTypes[argumentoEncontrado] as string)
      : WorkerTypes[0];
  }
}
