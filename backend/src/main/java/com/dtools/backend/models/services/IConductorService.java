package com.dtools.backend.models.services;

import java.util.List;

import com.dtools.backend.models.entity.Conductor;

public interface IConductorService {
	
	public List<Conductor> findAll();
	
	public List<Conductor> findAllidEmpresa(Double id);

	public Conductor findById(Long id);

	public Conductor save(Conductor conductor);

	public void delete(Long id);
}
