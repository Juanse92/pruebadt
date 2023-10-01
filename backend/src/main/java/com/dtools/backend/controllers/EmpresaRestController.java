package com.dtools.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dtools.backend.models.entity.Empresa;
import com.dtools.backend.models.services.IEmpresaServices;

@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/emp")
public class EmpresaRestController {

	@Autowired
	private IEmpresaServices empresaService;
	
	//Listar todas las empresa
	@GetMapping("/empresas")
	public List<Empresa> index(){
		return empresaService.findAll();
	}	
	
	//Obtener por ID
	@GetMapping("/empresas/{id}")
	public Empresa show(@PathVariable Long id) {
		return empresaService.findById(id);
	}
	
	//Crear nueva empresa con los parametros que se envíen
	@PostMapping("/empresas")
	@ResponseStatus(HttpStatus.CREATED)
	public Empresa create(@RequestBody Empresa empresa) {
		return empresaService.save(empresa);
	}
	
	//Modificar
	@PutMapping("/empresas/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Empresa Update(@RequestBody Empresa empresa,@PathVariable Long id) {
		Empresa empresaActual = empresaService.findById(id);
		
		empresaActual.setCiudadEmpresa(empresa.getCiudadEmpresa());
		empresaActual.setCiudadResponsable(empresa.getCiudadResponsable());
		empresaActual.setDepartamentoEmpresa(empresa.getDepartamentoEmpresa());
		empresaActual.setDepartamentoresponsable(empresa.getDepartamentoresponsable());
		empresaActual.setDireccionEmpresa(empresa.getDireccionEmpresa());
		empresaActual.setDireccionResponsable(empresa.getDireccionResponsable());
		empresaActual.setNombreEmpresa(empresa.getNombreEmpresa());
		empresaActual.setNombreResponsable(empresa.getNombreResponsable());
		empresaActual.setNumeroEmpresa(empresa.getNumeroEmpresa());
		empresaActual.setNumeroResponsable(empresa.getNumeroResponsable());
		empresaActual.setPaisEmpresa(empresa.getPaisEmpresa());
		empresaActual.setPaisresponsable(empresa.getPaisresponsable());
		empresaActual.setTelefonoEmpresa(empresa.getTelefonoEmpresa());
		empresaActual.setTelefonoesponsable(empresa.getTelefonoesponsable());
		empresaActual.setTipoEmpresa(empresa.getTipoEmpresa());
		empresaActual.setTipoResponsable(empresa.getTipoResponsable());
		
		return empresaService.save(empresaActual);	
	}
	
	//Borrar empresa
	@DeleteMapping("/empresas/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		
		empresaService.delete(id);
	}
	
}
