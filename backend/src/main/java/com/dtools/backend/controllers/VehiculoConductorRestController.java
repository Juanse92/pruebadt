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

import com.dtools.backend.models.entity.VehiculoConductor;
import com.dtools.backend.models.services.IVehiculoConductorService;

@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/vehcond")
public class VehiculoConductorRestController {
	@Autowired
	private IVehiculoConductorService vehiculoConductorService;
	
	//Listar todas las vehiculoCond
	@GetMapping("/vehiculoconduct")
	public List<VehiculoConductor> index(){
		return vehiculoConductorService.findAll();
	}	
	
	//Obtener por ID
	@GetMapping("/vehiculoconduct/idempresa/{id}")
	public List<VehiculoConductor> show(@PathVariable Double id) {
		return vehiculoConductorService.findByConductor(id);
	}
	
	//Obtener por ID
	@GetMapping("/vehiculoconduct/{id}")
	public VehiculoConductor show2(@PathVariable Long id) {
		return vehiculoConductorService.findById(id);
	}
	
	//Crear nueva vehiculoConductorActual con los parametros que se envíen
	@PostMapping("/vehiculoconduct")
	@ResponseStatus(HttpStatus.CREATED)
	public VehiculoConductor create(@RequestBody VehiculoConductor vehiculoConductor) {
		return vehiculoConductorService.save(vehiculoConductor);
	}
	
	//Modificar
	@PutMapping("/vehiculoconduct/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public VehiculoConductor Update(@RequestBody VehiculoConductor vehiculoConductor,@PathVariable Long id) {
		VehiculoConductor vehiculoConductorActual = vehiculoConductorService.findById(id);
		
		vehiculoConductorActual.setConductor(vehiculoConductor.getConductor());
		vehiculoConductorActual.setVehiculo(vehiculoConductor.getVehiculo());
		
		return vehiculoConductorService.save(vehiculoConductorActual);	
	}
	
	//Borrar vehiculoConductorActual
	@DeleteMapping("/vehiculoconduct/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		
		vehiculoConductorService.delete(id);
	}
}
