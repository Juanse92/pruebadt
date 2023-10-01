package com.dtools.backend.models.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dtools.backend.models.entity.VehiculoConductor;

public interface IVehiculoConductorDao extends CrudRepository<VehiculoConductor, Long>{
	List<VehiculoConductor> findByConductor(Double conductor);
}