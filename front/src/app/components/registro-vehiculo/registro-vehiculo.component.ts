import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { DatosVehiculo } from '../../entities/datosvehiculo';
import Swal from 'sweetalert2';
import 'moment/locale/es';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-registro-vehiculo',
  templateUrl: './registro-vehiculo.component.html',
  styleUrls: ['./registro-vehiculo.component.css']
})
export class RegistroVehiculoComponent implements OnInit {
  selectVehiculo:any
  listVehiculo:any[]
  listVehiculoCopy:any[]
  visible:boolean=false
  flagEdit:boolean=false
  idEmpresa:number = 0
  form:FormGroup;
  localeEs:any = {
    firstDayOfWeek: 1,
    dayNamesCod: ["DOMINGO", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"],
    dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",],
    dayNamesShort: ["Dom", "Lun", "Mar", "Miér", "Juev", "Vier", "Sáb"],
    dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    today: 'Hoy',
    clear: 'Limpiar'
};
  constructor(
    private vehiculoService:VehiculoService,
    private config : PrimeNGConfig,
    private fb: FormBuilder,
  ) { 
    this.form = this.fb.group({
      id:[null],
      empresa:[null],
      placa:[null, Validators.required],
      motor:[null, Validators.required],
      chasis:[null, Validators.required],
      modelo:[null, Validators.required],
      fechaMatricula:[null, Validators.required],
      pasajerosSentados:[null, Validators.required],
      pasajerosPie:[null, Validators.required],
      pesoSeco:[null, Validators.required],
      pesoBruto:[null, Validators.required],
      numeroPuertas:[null, Validators.required],
      marca:[null, Validators.required],
      linea:[null, Validators.required],
      vinculado:[null],
    })

  }

  ngOnInit(): void {
    this.config.setTranslation(this.localeEs)
    this.cargarDatos()
  }

  cargarDatos(){
    this.idEmpresa=parseInt(localStorage.getItem('idempresa'));
    this.vehiculoService.getVehiculosEmpresa(this.idEmpresa).subscribe(
      vehiculos => {
        this.listVehiculo = vehiculos
        this.listVehiculoCopy = this.listVehiculo.map(veh => ({ ...veh }));
        this.listVehiculoCopy.map(vehiculos=>vehiculos.vinculacion=(vehiculos.vinculacion)?'Afiliado':'Desalifiado')
        this.listVehiculoCopy.map(vehiculos=>vehiculos.fechaMatricula=new Date(vehiculos.fechaMatricula))
      }
   );
  }

  guardarmodificarVehiculo(){
    if(this.form.valid){
      let vehiculos: DatosVehiculo = new DatosVehiculo()
      vehiculos.empresa=this.idEmpresa
      vehiculos.placa=this.form.value.placa
      vehiculos.motor=this.form.value.motor
      vehiculos.chasis=this.form.value.chasis
      vehiculos.modelo=this.form.value.modelo
      vehiculos.fechaMatricula=this.form.value.fechaMatricula
      vehiculos.pasajerosSentados=this.form.value.pasajerosSentados
      vehiculos.pasajerosPie=this.form.value.pasajerosPie
      vehiculos.pesoSeco=this.form.value.pesoSeco
      vehiculos.pesoBruto=this.form.value.pesoBruto
      vehiculos.numeroPuertas=this.form.value.numeroPuertas
      vehiculos.marca=this.form.value.marca
      vehiculos.linea=this.form.value.linea
      if(!this.flagEdit){
        vehiculos.vinculacion=true
        this.vehiculoService.create(vehiculos).subscribe(
          vehiculo =>{
            Swal.fire('Resgristro', `Vehiculo ${vehiculo.marca} registrado`,'success')
            this.listVehiculo.push(vehiculo)

            this.listVehiculoCopy = this.listVehiculo.map(veh => ({ ...veh }));
            this.listVehiculoCopy.map(veh=>veh.vinculacion=(veh.vinculacion)?'Afiliado':'Desafiliado')
            this.listVehiculoCopy.map(veh=>veh.fechaMatricula=new Date(veh.fechaMatricula))
            this.visible=false          
          }
        )
      }else{
        vehiculos.id=this.form.value.id
        vehiculos.vinculacion=(this.form.value.vinculado==1)?true:false
        this.vehiculoService.update(vehiculos).subscribe(
          vehiculo =>{
            const index=this.listVehiculo.findIndex((veh:any)=>veh.id == vehiculo.id)
            this.listVehiculo[index]=vehiculos
            this.listVehiculoCopy = this.listVehiculo.map(veh => ({ ...veh }));
    
            this.listVehiculoCopy.map(veh=>veh.vinculacion=(veh.vinculacion)?'Afiliado':'Desafiliado')
            this.listVehiculoCopy.map(veh=>veh.fechaMatricula=new Date(veh.fechaMatricula))
            Swal.fire('Actualizado', `Datos vehiculo ${vehiculo.marca} actualizado`,'success')
            this.visible=false 

          }
        )
      }

    }else{
      Swal.fire({
        title:'Falta información', 
        text:'Faltan datos por ingresar marcados con (*)',
        icon:'warning',
        target: document.getElementById('form-modal')},)
    }
  }

  datosModificar(){
    this.vehiculoService.getVehiculo(this.selectVehiculo.id).subscribe(
      vehiculo => {
        this.form.patchValue({
          id:vehiculo.id,
          empresa:vehiculo.empresa,
          placa:vehiculo.placa,
          motor:vehiculo.motor,
          chasis:vehiculo.chasis,
          modelo:vehiculo.motor,
          fechaMatricula:new Date(vehiculo.fechaMatricula),
          pasajerosSentados:vehiculo.pasajerosSentados,
          pasajerosPie:vehiculo.pasajerosPie,
          pesoSeco:vehiculo.pesoSeco,
          pesoBruto:vehiculo.pesoBruto,
          numeroPuertas:vehiculo.numeroPuertas,
          marca:vehiculo.marca,
          linea:vehiculo.linea,
          vinculado:vehiculo.vinculacion
        })
      }
   );

    this.flagEdit=true
  }
}
