export interface Trabajadores {
  dni: string;
  horasLaboradas: number;
  diasLaborados: number;
  faltas: number;
  tipodeTrabajador: number;
  sueldo?: number;
}
export interface Paginator {
  trabajadores: Trabajadores[];
  pageIndex: number;
  pageSize: number;
  totalCount: number;
}
