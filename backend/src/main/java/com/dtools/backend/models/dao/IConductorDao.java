package com.dtools.backend.models.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.dtools.backend.models.entity.Conductor;

public interface IConductorDao extends CrudRepository<Conductor, Long> {
	List<Conductor> findByEmpresa(Double empresa);
}
