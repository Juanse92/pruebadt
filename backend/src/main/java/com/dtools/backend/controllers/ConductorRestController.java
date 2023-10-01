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

import com.dtools.backend.models.entity.Conductor;
import com.dtools.backend.models.services.IConductorService;

@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/con")
public class ConductorRestController {

	@Autowired
	private IConductorService conductorService;
	
	//Listar todos los conductores
	@GetMapping("/conductores")
	public List<Conductor> index(){
		return conductorService.findAll();
	}	
	
	//Obtener por ID
	@GetMapping("/conductores/idempresa/{id}")
	public List<Conductor> show(@PathVariable Double id) {
		return conductorService.findAllidEmpresa(id);
	}
	
	//Obtener por ID
	@GetMapping("/conductores/{id}")
	public Conductor show2(@PathVariable Long id) {
		return conductorService.findById(id);
	}
	
	//Crear nuevo conductor
	@PostMapping("/conductores")
	@ResponseStatus(HttpStatus.CREATED)
	public Conductor create(@RequestBody Conductor conductor) {
		return conductorService.save(conductor);
	}
	
	//Modificar
	@PutMapping("/conductores/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Conductor Update(@RequestBody Conductor conductor,@PathVariable Long id) {
		Conductor conductorActual = conductorService.findById(id);
		
		conductorActual.setCiudad(conductor.getCiudad());
		conductorActual.setDepartamento(conductor.getDepartamento());
		conductorActual.setDireccion(conductor.getDireccion());
		conductorActual.setEmpresa(conductor.getEmpresa());
		conductorActual.setNombre(conductor.getNombre());
		conductorActual.setNumeroIdentificacion(conductor.getNumeroIdentificacion());
		conductorActual.setPais(conductor.getPais());
		conductorActual.setTelefono(conductor.getTelefono());
		conductorActual.setTipoDocumento(conductor.getTipoDocumento());
		
		return conductorService.save(conductorActual);	
	}
	
	//Borrar conductor
	@DeleteMapping("/conductores/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		
		conductorService.delete(id);
	}
}
