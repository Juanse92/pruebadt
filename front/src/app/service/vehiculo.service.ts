import { Injectable } from '@angular/core';
import { DatosVehiculo } from '../entities/datosvehiculo';
import { of,Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class VehiculoService {
  private urlEndPoint: string = 'http://localhost:8090/veh/vehiculos';

  private httpHeaders =new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<DatosVehiculo[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as DatosVehiculo[])
    );
  }

  getVehiculosEmpresa(id): Observable<DatosVehiculo[]> {
    return this.http.get(`${this.urlEndPoint}/idempresa/${id}`).pipe(
      map(response => response as DatosVehiculo[])
    );
  }

  create(vehiculo: DatosVehiculo): Observable<DatosVehiculo>{
    return this.http.post<DatosVehiculo>(this.urlEndPoint,vehiculo,{headers: this.httpHeaders} )
  }
  getVehiculo(id):Observable<DatosVehiculo>{
    return this.http.get<DatosVehiculo>(`${this.urlEndPoint}/${id}`)
  }
  update(vehiculo: DatosVehiculo):Observable<DatosVehiculo>{
    return this.http.put<DatosVehiculo>(`${this.urlEndPoint}/${vehiculo.id}`,vehiculo,{headers: this.httpHeaders})
  }
  delete(id:Number):Observable<DatosVehiculo>{
    return this.http.delete<DatosVehiculo>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
  }
}
