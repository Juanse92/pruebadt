import { Injectable } from '@angular/core';
import { DatosConductor } from '../entities/datosconductor';
import { of,Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ConductorService {
  private urlEndPoint: string = 'http://localhost:8090/con/conductores';

  private httpHeaders =new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  getConductores(): Observable<DatosConductor[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as DatosConductor[])
    );
  }

  getConductoresEmpresa(id): Observable<DatosConductor[]> {
    return this.http.get(`${this.urlEndPoint}/idempresa/${id}`).pipe(
      map(response => response as DatosConductor[])
    );
  }

  create(conductor: DatosConductor): Observable<DatosConductor>{
    return this.http.post<DatosConductor>(this.urlEndPoint,conductor,{headers: this.httpHeaders} )
  }
  getConductor(id):Observable<DatosConductor>{
    return this.http.get<DatosConductor>(`${this.urlEndPoint}/${id}`)
  }
  update(conductor: DatosConductor):Observable<DatosConductor>{
    return this.http.put<DatosConductor>(`${this.urlEndPoint}/${conductor.id}`,conductor,{headers: this.httpHeaders})
  }
  delete(id:Number):Observable<DatosConductor>{
    return this.http.delete<DatosConductor>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
  }
}
