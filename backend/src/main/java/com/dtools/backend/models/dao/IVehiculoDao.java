package com.dtools.backend.models.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dtools.backend.models.entity.Vehiculo;

public interface IVehiculoDao extends CrudRepository<Vehiculo, Long>{
	List<Vehiculo> findByEmpresa(Double empresa);
}
