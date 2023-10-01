package com.dtools.backend.models.services;

import java.util.List;

import com.dtools.backend.models.entity.VehiculoConductor;

public interface IVehiculoConductorService {

	public List<VehiculoConductor> findAll();
	
	public List<VehiculoConductor> findByConductor(Double conductor);

	public VehiculoConductor findById(Long id);

	public VehiculoConductor save(VehiculoConductor vehiculoConductor);

	public void delete(Long id);
}
