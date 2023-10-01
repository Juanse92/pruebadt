import { Injectable } from '@angular/core';
import { DatosEmpresa } from '../entities/datosempresa';
import { of,Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class EmpresaService {
  private urlEndPoint: string = 'http://localhost:8090/emp/empresas';

  private httpHeaders =new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<DatosEmpresa[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as DatosEmpresa[])
    );
  }
  create(empresa: DatosEmpresa): Observable<DatosEmpresa>{
    return this.http.post<DatosEmpresa>(this.urlEndPoint,empresa,{headers: this.httpHeaders} )
  }
  getEmpresa(id):Observable<DatosEmpresa>{
    return this.http.get<DatosEmpresa>(`${this.urlEndPoint}/${id}`)
  }
  update(empresa: DatosEmpresa):Observable<DatosEmpresa>{
    return this.http.put<DatosEmpresa>(`${this.urlEndPoint}/${empresa.id}`,empresa,{headers: this.httpHeaders})
  }
  delete(id:Number):Observable<DatosEmpresa>{
    return this.http.delete<DatosEmpresa>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
  }
}
