import { Injectable } from "@angular/core";

@Injectable()
export class ParametroNavegacionService {

    public accion:any
    public parametro:any

    setParametro<T>(param:T){
        this.parametro = param;
    }

    getParametro<T>():T{
        return this.parametro
    }

    setAccion<T>(param:T){
        this.accion = param;
    }

    getAccion<T>():T{
        return this.accion
    }

}