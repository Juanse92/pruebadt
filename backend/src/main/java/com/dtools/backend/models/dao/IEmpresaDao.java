package com.dtools.backend.models.dao;

import org.springframework.data.repository.CrudRepository;
import com.dtools.backend.models.entity.Empresa;

public interface IEmpresaDao extends CrudRepository<Empresa, Long>{

}
