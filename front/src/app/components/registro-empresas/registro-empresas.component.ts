import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { DatosEmpresa } from 'src/app/entities/datosempresa';
import { EmpresaService } from 'src/app/service/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-empresas',
  templateUrl: './registro-empresas.component.html',
  styleUrls: ['./registro-empresas.component.css']
})
export class RegistroEmpresasComponent implements OnInit {
  tipoDocumentoEmpresas:any=[]
  tipoDocumentoPersona:any=[]
  paises:any = [];
  departamentos:any = [];
  cidudades:any = [];
  flagEditar:boolean =false

  //formulario
  form:FormGroup;

  constructor(
    private fb: FormBuilder,
    private empresaService: EmpresaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    this.form = this.fb.group({
      id:[null],
      tipoemp:[null, Validators.required],
      numeroemp:[null, Validators.required],
      nombreemp:[null, Validators.required],
      direccionemp:[null, Validators.required],
      paisemp:[null, Validators.required],
      departamemp:[null, Validators.required],
      ciudademp:[null, Validators.required],
      telefonoemp:[null, Validators.required],
      tipoRep:[null, Validators.required],
      numeRep:[null, Validators.required],
      nombreRep:[null, Validators.required],
      direccionRep:[null, Validators.required],
      teleRep:[null, Validators.required],
      paisRep:[null, Validators.required],
      deparRep:[null, Validators.required],
      ciudadRep:[null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.tipoDocumentoEmpresas=[
      {label:'NIT',value:'NIT'},
      {label:'Registro Mercantil',value:'Registro Mercantil'},
      {label:'Cédula Jurídica',value:'Cédula Jurídica'},
      {label:'Número de Registro de Empresas',value:'Número de Registro de Empresas'},
      {label:'Número de Identificación Empresarial',value:'Número de Identificación Empresarial'},
      {label:'Registro de Contribuyentes',value:'Registro de Contribuyentes'},
      {label:'Número de Identificación Fiscal',value:'Número de Identificación Fiscal'},
      {label:'Número de Registro de Comercio',value:'Número de Registro de Comercio'},
      {label:'Número de Identificación de Sociedad',value:'Número de Identificación de Sociedad'}
    ]
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

    this.cargaEmpresa()
  }

  cargaEmpresa():void{
    this.activatedRoute.params.subscribe(params=>{
      let id= params['id']
      if(id){
        this.empresaService.getEmpresa(id).subscribe((empresa) =>{
          this.form.patchValue({
            id:empresa.id,
            tipoemp:{label:empresa.tipoEmpresa,value:empresa.tipoEmpresa},
            numeroemp:empresa.numeroEmpresa,
            nombreemp:empresa.nombreEmpresa,
            direccionemp:empresa.direccionEmpresa,
            paisemp:{label:empresa.paisEmpresa,value:empresa.paisEmpresa},
            departamemp:{label:empresa.departamentoEmpresa,value:empresa.departamentoEmpresa},
            ciudademp:{label:empresa.ciudadEmpresa,value:empresa.ciudadEmpresa},
            telefonoemp:empresa.telefonoEmpresa,
            tipoRep:{label:empresa.tipoResponsable,value:empresa.tipoResponsable},
            numeRep:empresa.numeroResponsable,
            nombreRep:empresa.nombreResponsable,
            direccionRep:empresa.direccionResponsable,
            teleRep:empresa.telefonoesponsable,
            paisRep:{label:empresa.paisresponsable,value:empresa.paisresponsable},
            deparRep:{label:empresa.departamentoresponsable,value:empresa.departamentoresponsable},
            ciudadRep:{label:empresa.ciudadResponsable,value:empresa.ciudadResponsable},
          })
          this.flagEditar=true
        })
      }

    })
  }
  update():void{
    if(this.form.valid){
      let empresa: DatosEmpresa = new DatosEmpresa()
      empresa.id = this.form.value.id;
      empresa.tipoEmpresa=this.form.value.tipoemp.value
      empresa.numeroEmpresa=this.form.value.numeroemp
      empresa.nombreEmpresa=this.form.value.nombreemp
      empresa.direccionEmpresa=this.form.value.direccionemp
      empresa.paisEmpresa=this.form.value.paisemp.value
      empresa.departamentoEmpresa=this.form.value.departamemp.value
      empresa.ciudadEmpresa=this.form.value.ciudademp.value
      empresa.telefonoEmpresa=this.form.value.telefonoemp
      empresa.tipoResponsable=this.form.value.tipoRep.value
      empresa.numeroResponsable=this.form.value.numeRep
      empresa.nombreResponsable=this.form.value.nombreRep
      empresa.direccionResponsable=this.form.value.direccionRep
      empresa.telefonoesponsable=this.form.value.teleRep
      empresa.paisresponsable=this.form.value.paisRep.value
      empresa.departamentoresponsable=this.form.value.deparRep.value
      empresa.ciudadResponsable=this.form.value.ciudadRep.value
      this.empresaService.update(empresa).subscribe(
        empresa =>{
          this.router.navigate(['/listemp'])
          Swal.fire('Actualizado', `Empresa ${empresa.nombreEmpresa}`,'success')
      }
      )
    }else{
      Swal.fire('Falta información', 'Faltan datos por ingresar marcados con (*)','warning')
    }
  }

  public guardarEmp(): void{
    if(this.form.valid){
      let empresa: DatosEmpresa = new DatosEmpresa()
      empresa.tipoEmpresa=this.form.value.tipoemp.value
      empresa.numeroEmpresa=this.form.value.numeroemp
      empresa.nombreEmpresa=this.form.value.nombreemp
      empresa.direccionEmpresa=this.form.value.direccionemp
      empresa.paisEmpresa=this.form.value.paisemp.value
      empresa.departamentoEmpresa=this.form.value.departamemp.value
      empresa.ciudadEmpresa=this.form.value.ciudademp.value
      empresa.telefonoEmpresa=this.form.value.telefonoemp
      empresa.tipoResponsable=this.form.value.tipoRep.value
      empresa.numeroResponsable=this.form.value.numeRep
      empresa.nombreResponsable=this.form.value.nombreRep
      empresa.direccionResponsable=this.form.value.direccionRep
      empresa.telefonoesponsable=this.form.value.teleRep
      empresa.paisresponsable=this.form.value.paisRep.value
      empresa.departamentoresponsable=this.form.value.deparRep.value
      empresa.ciudadResponsable=this.form.value.ciudadRep.value

      this.empresaService.create(empresa).subscribe(
        empresa =>{
          this.router.navigate(['/listemp'])
          Swal.fire('Resgristro', `Empresa ${empresa.nombreEmpresa} registrada`,'success')
        }
      )

    }else{
      Swal.fire('Falta información', 'Faltan datos por ingresar marcados con (*)','warning')
    }
  }
}
