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

import com.dtools.backend.models.entity.Vehiculo;
import com.dtools.backend.models.services.IVehiculoServices;

@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/veh")
public class VehiculoRestController {
	@Autowired
	private IVehiculoServices vehiculoService;
	
	//Listar todos los vehiculos
	@GetMapping("/vehiculos")
	public List<Vehiculo> index(){
		return vehiculoService.findAll();
	}	
	
	//Obtener por ID
	@GetMapping("/vehiculos/idempresa/{id}")
	public List<Vehiculo> show(@PathVariable Double id) {
		return vehiculoService.findAllidEmpresa(id);
	}
	
	//Obtener por ID
	@GetMapping("/vehiculos/{id}")
	public Vehiculo show1(@PathVariable Long id) {
		return vehiculoService.findById(id);
	}
	
	//Registrar nuevo vehiculo
	@PostMapping("/vehiculos")
	@ResponseStatus(HttpStatus.CREATED)
	public Vehiculo create(@RequestBody Vehiculo vehiculo) {
		return vehiculoService.save(vehiculo);
	}
	
	//Modificar
	@PutMapping("/vehiculos/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	public Vehiculo Update(@RequestBody Vehiculo vehiculo,@PathVariable Long id) {
		Vehiculo vehiculoActual = vehiculoService.findById(id);
		
		vehiculoActual.setChasis(vehiculo.getChasis());
		vehiculoActual.setEmpresa(vehiculo.getEmpresa());
		vehiculoActual.setFechaMatricula(vehiculo.getFechaMatricula());
		vehiculoActual.setLinea(vehiculo.getLinea());
		vehiculoActual.setMarca(vehiculo.getMarca());
		vehiculoActual.setModelo(vehiculo.getModelo());
		vehiculoActual.setMotor(vehiculo.getMotor());
		vehiculoActual.setNumeroPuertas(vehiculo.getNumeroPuertas());
		vehiculoActual.setPasajerosPie(vehiculo.getPasajerosPie());
		vehiculoActual.setPasajerosSentados(vehiculo.getPasajerosSentados());
		vehiculoActual.setPesoBruto(vehiculo.getPesoBruto());
		vehiculoActual.setPesoSeco(vehiculo.getPesoSeco());
		vehiculoActual.setPlaca(vehiculo.getPlaca());
		vehiculoActual.setVinculacion(vehiculo.getVinculacion());
		
		
		return vehiculoService.save(vehiculoActual);	
	}
	
	//Borrar vehiculo
	@DeleteMapping("/vehiculos/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		
		vehiculoService.delete(id);
	}
}
