import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DatosEmpresa } from 'src/app/entities/datosempresa';
import { EmpresaService } from 'src/app/service/empresa.service';
import { ParametroNavegacionService } from 'src/app/service/parametro-navegation.service';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css']
})
export class ListaEmpresasComponent implements OnInit {

  listEmp:any=[]
  listEmpresa:DatosEmpresa[]
  selectEmpresa:DatosEmpresa

  constructor(
    private empresaService: EmpresaService,
    private parametroNavegacionService: ParametroNavegacionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(
      empresas => {
        this.listEmpresa = empresas
        this.listEmp=[]
        for (const ele of this.listEmpresa) {
          this.listEmp.push({id:ele.id,label:ele.nombreEmpresa,value:ele.nombreEmpresa})
        }
        this.parametroNavegacionService.setParametro<any>(this.listEmp)
      }
   );
  }

  routerId(){
    this.router.navigate(['/regemp',this.selectEmpresa.id.toString()])
  }

}
