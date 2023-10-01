package com.dtools.backend.models.services;

import java.util.List;

import com.dtools.backend.models.entity.Empresa;

public interface IEmpresaServices {
	
public List<Empresa> findAll();

public Empresa findById(Long id);

public Empresa save(Empresa cliente);

public void delete(Long id);
}
