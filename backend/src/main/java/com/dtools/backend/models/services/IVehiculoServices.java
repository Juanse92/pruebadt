package com.dtools.backend.models.services;

import java.util.List;

import com.dtools.backend.models.entity.Vehiculo;

public interface IVehiculoServices {

	public List<Vehiculo> findAll();
	
	public List<Vehiculo> findAllidEmpresa(Double id);

	public Vehiculo findById(Long id);

	public Vehiculo save(Vehiculo vehiculo);

	public void delete(Long id);
	
}
