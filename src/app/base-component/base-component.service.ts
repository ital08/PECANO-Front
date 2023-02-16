import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paginator } from '../shared/model/base-component.model';
import { URIHelper } from '../shared/model/uri-helper';

@Injectable({
  providedIn: 'root',
})
export class BaseComponentService {
  api = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getTrabajadores(param?: any): Observable<Paginator> {
    let helper = new URIHelper();
    let params = helper.obj2uri(param);
    const endpoint = this.api + `getData${params ? '?' + params : ''}`;
    return this.http.get<Paginator>(endpoint);
  }
}
