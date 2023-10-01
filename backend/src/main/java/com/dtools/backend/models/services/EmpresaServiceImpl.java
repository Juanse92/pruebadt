package com.dtools.backend.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dtools.backend.models.dao.IEmpresaDao;
import com.dtools.backend.models.entity.Empresa;

@Service
public class EmpresaServiceImpl implements IEmpresaServices{

	@Autowired
	private IEmpresaDao empresaDao;
	
	@Override
	@Transactional(readOnly=true)
	public List<Empresa> findAll() {
		return (List<Empresa>) empresaDao.findAll();
	}

	@Override
	@Transactional(readOnly=true)
	public Empresa findById(Long id) {
		return empresaDao.findById(id).orElse(null);
	}

	@Override
	@Transactional
	public Empresa save(Empresa empresa) {
		return empresaDao.save(empresa);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		empresaDao.deleteById(id);
		
	}
}
