import { Component, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseComponentService } from './base-component.service';
import { MatTableDataSource } from '@angular/material/table';
import { Trabajadores } from '../shared/model/base-component.model';
import { WorkerTypes } from '../shared/enums/worker.model';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css'],
})
export class BaseComponentComponent implements AfterViewInit {
  form?: FormGroup;
  loading: boolean = false;
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
      tipodeTrabajador: new FormControl(undefined),
      dni: new FormControl(undefined),
    });
  }

  search() {
    this.loading = true;
    const values = this.form?.value;
    this.baseComponentService.getTrabajadores(values).subscribe(
      (response) => {
        this.dataSource = new MatTableDataSource<Trabajadores>(response);
        this.loading = false;
      },
      (e) => {
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
      : 'No tiene un tipo de trabajador';
  }
}
