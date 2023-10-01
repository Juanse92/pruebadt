import { Injectable } from '@angular/core';
import { DatosVehiculoconductor } from '../entities//vehiculoconductor';
import { of,Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class VehiculoconductorService {
  private urlEndPoint: string = 'http://localhost:8090/vehcond/vehiculoconduct';

  private httpHeaders =new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  getConductores(): Observable<DatosVehiculoconductor[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as DatosVehiculoconductor[])
    );
  }

  getVehiculoConductoresConId(id): Observable<DatosVehiculoconductor[]> {
    return this.http.get(`${this.urlEndPoint}/idempresa/${id}`).pipe(
      map(response => response as DatosVehiculoconductor[])
    );
  }

  create(vehiculoconductor: DatosVehiculoconductor): Observable<DatosVehiculoconductor>{
    return this.http.post<DatosVehiculoconductor>(this.urlEndPoint,vehiculoconductor,{headers: this.httpHeaders} )
  }
  getConductor(id):Observable<DatosVehiculoconductor>{
    return this.http.get<DatosVehiculoconductor>(`${this.urlEndPoint}/${id}`)
  }
  update(vehiculoconductor: DatosVehiculoconductor):Observable<DatosVehiculoconductor>{
    return this.http.put<DatosVehiculoconductor>(`${this.urlEndPoint}/${vehiculoconductor.id}`,vehiculoconductor,{headers: this.httpHeaders})
  }
  delete(id:Number):Observable<DatosVehiculoconductor>{
    return this.http.delete<DatosVehiculoconductor>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
  }
}
