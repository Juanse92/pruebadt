import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParametroNavegacionService } from 'src/app/service/parametro-navegation.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  title = 'Prueba desarrollador';
  sidebarVisible:boolean=false
  empresas:any[]=[
    {id:0,label:'Administrador', value:'Administrador'}
  ]

  selectEmpresa={id:0,label:'Administrador', value:'Administrador'}
  items=[]
  items2=[]

  constructor(
    private parametroNavegacionService: ParametroNavegacionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.actualizarmenu()
  }

  actualizarmenu(){
    localStorage.setItem('idempresa',this.selectEmpresa.id.toString());
    if(this.selectEmpresa.id === 0){
      this.items = [
        {label: 'Registro empresa', icon: 'pi pi-building', routerLink:'/regemp',command: () => {this.sidebarVisible=false}},
        {label: 'Listado de empresas', icon: 'pi pi-list', routerLink:'/listemp',command: () => {this.sidebarVisible=false}}
      ];
      this.items2 = [
        {icon: 'pi pi-building', routerLink:'/regemp',ptooltip:'asd',command: () => {this.sidebarVisible=false}},
        {icon: 'pi pi-list', routerLink:'/listemp',command: () => {this.sidebarVisible=false}}
      ];
      this.router.navigate(['/listemp'])
    }else{
      this.items = [
        {label: 'Registro conductores', icon: 'pi pi-user-edit', routerLink:'/regcond',command: () => {this.sidebarVisible=false}},
        {label: 'Resgistro vehiculos', icon: 'pi pi-car', routerLink:'/regveh',command: () => {this.sidebarVisible=false}}
      ];
      this.items2 = [
        {icon: 'pi pi-user-edit', routerLink:'/regcond',command: () => {this.sidebarVisible=false}},
        {icon: 'pi pi-car', routerLink:'/regveh',command: () => {this.sidebarVisible=false}}
      ];
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/regcond']);
      });
    }
  }

  menuIn(){
    this.empresas=[
      {id:0,label:'Administrador', value:'Administrador'}
    ]
    let listEmp:any[]=this.parametroNavegacionService.getParametro()

    for (const emp of listEmp) {
      this.empresas.push(emp)
    }
  }
}
