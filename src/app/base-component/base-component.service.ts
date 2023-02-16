import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trabajadores } from '../shared/model/base-component.model';
import { URIHelper } from '../shared/model/uri-helper';

@Injectable({
  providedIn: 'root',
})
export class BaseComponentService {
  api = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getTrabajadores<T>(param?: any): Observable<Trabajadores[]> {
    let helper = new URIHelper();
    let params = helper.obj2uri(param);
    const endpoint = this.api + `getData${params ? '?' + params : ''}`;
    return this.http.get<Trabajadores[]>(endpoint);
  }
}
