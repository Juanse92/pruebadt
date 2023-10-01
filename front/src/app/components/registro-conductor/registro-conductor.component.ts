import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ConductorService } from 'src/app/service/conductor.service';
import { DatosConductor } from '../../entities/datosconductor';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { DatosVehiculoconductor } from 'src/app/entities/vehiculoconductor';
import { VehiculoconductorService } from 'src/app/service/vehiculoconducto.service';

@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.component.html',
  styleUrls: ['./registro-conductor.component.css']
})
export class RegistroConductorComponent implements OnInit {
  listVehiculo:any[]
  selectVehiculo:any=[]

  selectConductor:any
  listConducto:any[]
  visible:boolean=false
  visible2:boolean=false
  visible3:boolean=false
  flagEdit:boolean=false
  idEmpresa:number = 0
  form:FormGroup;

  tipoDocumentoPersona:any
  paises:any
  departamentos:any
  cidudades:any

  constructor(
    private conductorService:ConductorService,
    private vehiculoService:VehiculoService,
    private vehiculoconductorService: VehiculoconductorService,
    private fb: FormBuilder,
  ) { 
    this.form = this.fb.group({
      id:[null],
      empresa:[null],
      tipoDocumento:[null, Validators.required],
      numeroIdentificacion:[null, Validators.required],
      nombre:[null, Validators.required],
      direccion:[null, Validators.required],
      ciudad:[null, Validators.required],
      departamento:[null, Validators.required],
      pais:[null, Validators.required],
      telefono:[null, Validators.required],
    })

  }

  ngOnInit(): void {
    this.tipoDocumentoPersona=[
      {label:'Cédula de ciudadania',value:'Cédula de ciudadania'},
      {label:'Pasaporte',value:'Pasaporte'},
      {label:'Cédula de extranjería',value:'Cédula de extranjería'}
    ]
    this.paises=[
      {label:'Colombia',value:'Colombia'},
      {label:'Argentina',value:'Argentina'},
      {label:'Bolivia',value:'Bolivia'},
      {label:'Brasil',value:'Brasil'},
      {label:'Chile',value:'Chile'},
      {label:'Costa Rica',value:'Costa Rica'},
      {label:'Cuba',value:'Cuba'},
      {label:'Ecuador',value:'Ecuador'},
      {label:'El Salvador',value:'El Salvador'}
    ]
    this.departamentos=[
      {label:'Departamento 1',value:'Departamento 1'},
      {label:'Departamento 2',value:'Departamento 2'},
      {label:'Departamento 3',value:'Departamento 3'},
      {label:'Departamento 4',value:'Departamento 4'},
      {label:'Departamento 5',value:'Departamento 5'},
      {label:'Departamento 6',value:'Departamento 6'},
      {label:'Departamento 7',value:'Departamento 7'},
      {label:'Departamento 8',value:'Departamento 8'},
      {label:'Departamento 9',value:'Departamento 9'},
      {label:'Departamento 10',value:'Departamento 10'}

    ]
    this.cidudades=[
      {label:'Ciudad 1',value:'Ciudad 1'},
      {label:'Ciudad 2',value:'Ciudad 2'},
      {label:'Ciudad 3',value:'Ciudad 3'},
      {label:'Ciudad 4',value:'Ciudad 4'},
      {label:'Ciudad 5',value:'Ciudad 5'},
      {label:'Ciudad 6',value:'Ciudad 6'},
      {label:'Ciudad 7',value:'Ciudad 7'},
      {label:'Ciudad 8',value:'Ciudad 8'},
      {label:'Ciudad 9',value:'Ciudad 9'},
      {label:'Ciudad 10',value:'Ciudad 10'}
    ]
    this.cargarDatos()
  }

  cargarDatos(){
    this.idEmpresa=parseInt(localStorage.getItem('idempresa'));
    this.conductorService.getConductoresEmpresa(this.idEmpresa).subscribe(
      conductor => {
        this.listConducto = conductor
      }
   );
    this.vehiculoService.getVehiculosEmpresa(this.idEmpresa).subscribe(
      vehiculos => {
        this.listVehiculo = vehiculos
        this.listVehiculo.map(veh=>veh.fechaMatricula=new Date(veh.fechaMatricula))
        this.listVehiculo=this.listVehiculo.filter((veh:any)=> veh.vinculacion==true)
      }
    );
  }

  guardarmodificarVehiculo(){
    if(this.form.valid){
      let conductor: DatosConductor = new DatosConductor()
      conductor.empresa=this.idEmpresa
      conductor.tipoDocumento=this.form.value.tipoDocumento.label
      conductor.numeroIdentificacion=this.form.value.numeroIdentificacion
      conductor.nombre=this.form.value.nombre
      conductor.direccion=this.form.value.direccion
      conductor.ciudad=this.form.value.ciudad.label
      conductor.departamento=this.form.value.departamento.label
      conductor.pais=this.form.value.pais.label
      conductor.telefono=this.form.value.telefono

      if(!this.flagEdit){
        this.conductorService.create(conductor).subscribe(
          conduc =>{
            Swal.fire('Resgristro', `Conductor ${conduc.nombre} registrado`,'success')
            this.listConducto.push(conduc)
            this.visible=false          
          }
        )
      }else{
        conductor.id=this.form.value.id
        this.conductorService.update(conductor).subscribe(
          conductor =>{
            const index=this.listConducto.findIndex((con:any)=>con.id == conductor.id)
            this.listConducto[index]=conductor
            Swal.fire('Actualizado', `Datos del conductor ${conductor.nombre} actualizados`,'success')
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
    this.conductorService.getConductor(this.selectConductor.id).subscribe(
      conductor => {
        this.form.patchValue({
          id:conductor.id,
          empresa:conductor.empresa,
          tipoDocumento:{label:conductor.tipoDocumento,value:conductor.tipoDocumento},
          numeroIdentificacion:conductor.numeroIdentificacion,
          nombre:conductor.nombre,
          direccion:conductor.direccion,
          ciudad:{label:conductor.ciudad,value:conductor.ciudad},
          departamento:{label:conductor.departamento,value:conductor.departamento},
          pais:{label:conductor.pais,value:conductor.pais},
          telefono:conductor.telefono,
        })
      }
   );

    this.flagEdit=true
  }
  nombreCondutor:string
  idConductor:number
  vehicolusCoductorOut:any
  dialogVehiculo(conductor){
    if(this.listVehiculo.length>0)
    {
      this.nombreCondutor=conductor.nombre
      this.idConductor=conductor.id
      this.vehiculoconductorService.getVehiculoConductoresConId(this.idConductor).subscribe(
        vehicolusCoductor => {
          this.vehicolusCoductorOut=vehicolusCoductor
          if(vehicolusCoductor.length>0){
            this.selectVehiculo=[]
            vehicolusCoductor.forEach(element => {
              this.selectVehiculo.push(this.listVehiculo.filter(resp=>resp.id == element.vehiculo)[0])
            });
          }else{
            this.selectVehiculo=[]
          }
      })
      this.visible2=false
      setTimeout(() => {
        this.visible2=true
      }, 100);
    }else{
      Swal.fire('Alerta', `No se encuentran vehículos registrados en esta empresa. Le recomendamos dirigirse al menú de la izquierda y seleccionar la opción 'Registro de Vehículos' para comenzar el proceso de registro de vehículos.`,'warning')
    }
  }

  asigarVehiculos(){
    
    if(this.vehicolusCoductorOut.length > 0){
      for(const ele of this.vehicolusCoductorOut){
        this.vehiculoconductorService.delete(ele.id).subscribe(
          conduc =>{}
        )
      }
    }
    let vehiculoConductor:DatosVehiculoconductor = new DatosVehiculoconductor()
    vehiculoConductor.conductor=this.idConductor

    for(const ele of this.selectVehiculo){
      vehiculoConductor.vehiculo=ele.id
      this.vehiculoconductorService.create(vehiculoConductor).subscribe(
        conduc =>{}
      )

  }
    this.visible2=false
    Swal.fire('Resgristro', `vehiculos registrados a ${this.nombreCondutor}`,'success')
  }
}
