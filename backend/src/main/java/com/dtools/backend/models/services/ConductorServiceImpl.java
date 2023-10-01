package com.dtools.backend.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dtools.backend.models.dao.IConductorDao;
import com.dtools.backend.models.entity.Conductor;

@Service
public class ConductorServiceImpl implements IConductorService{

	@Autowired
	private IConductorDao conductorDao;
	
	@Override
	@Transactional(readOnly=true)
	public List<Conductor> findAll() {
		return (List<Conductor>) conductorDao.findAll();
	}

	@Override
	@Transactional(readOnly=true)
	public List<Conductor> findAllidEmpresa(Double id) {
		return conductorDao.findByEmpresa(id);
	}
	
	@Override
	@Transactional(readOnly=true)
	public Conductor findById(Long id) {
		return conductorDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Conductor save(Conductor conductor) {
		return conductorDao.save(conductor);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		conductorDao.deleteById(id);
		
	}
}
