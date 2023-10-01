package com.dtools.backend.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.dtools.backend.models.dao.IVehiculoConductorDao;
import com.dtools.backend.models.entity.VehiculoConductor;

@Service
public class VehiculoConductorServiceImpl implements IVehiculoConductorService{

	@Autowired
	private IVehiculoConductorDao vehiculoConductorDao;
	
	@Override
	@Transactional(readOnly=true)
	public List<VehiculoConductor> findAll() {
		return (List<VehiculoConductor>) vehiculoConductorDao.findAll();
	}

	@Override
	@Transactional(readOnly=true)
	public VehiculoConductor findById(Long id) {
		return vehiculoConductorDao.findById(id).orElse(null);
	}
	
	@Override
	@Transactional(readOnly=true)
	public List<VehiculoConductor> findByConductor(Double conductor) {
		return vehiculoConductorDao.findByConductor(conductor);
	}
	
	@Override
	@Transactional
	public VehiculoConductor save(VehiculoConductor vehiculoConductor) {
		return vehiculoConductorDao.save(vehiculoConductor);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		vehiculoConductorDao.deleteById(id);
		
	}
	
}
