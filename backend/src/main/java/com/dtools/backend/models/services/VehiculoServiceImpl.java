package com.dtools.backend.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dtools.backend.models.dao.IVehiculoDao;
import com.dtools.backend.models.entity.Vehiculo;

@Service
public class VehiculoServiceImpl implements IVehiculoServices{

	@Autowired
	private IVehiculoDao vehiculoDao;
	
	@Override
	@Transactional(readOnly=true)
	public List<Vehiculo> findAll() {
		return (List<Vehiculo>) vehiculoDao.findAll();
	}

	@Override
	@Transactional(readOnly=true)
	public Vehiculo findById(Long id) {
		return vehiculoDao.findById(id).orElse(null);
	}
	
	@Override
	@Transactional(readOnly=true)
	public List<Vehiculo> findAllidEmpresa(Double id) {
		return vehiculoDao.findByEmpresa(id);
	}

	@Override
	@Transactional
	public Vehiculo save(Vehiculo vehiculo) {
		return vehiculoDao.save(vehiculo);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		vehiculoDao.deleteById(id);
		
	}
}
