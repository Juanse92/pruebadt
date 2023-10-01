package com.dtools.backend.models.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="VehiculoConductor")
public class VehiculoConductor implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "fk_vehiculo_id")
	private Double vehiculo;
	
	@Column(name = "fk_conductor_id")
	private Double conductor;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getVehiculo() {
		return vehiculo;
	}

	public void setVehiculo(Double vehiculo) {
		this.vehiculo = vehiculo;
	}

	public Double getConductor() {
		return conductor;
	}

	public void setConductor(Double conductor) {
		this.conductor = conductor;
	}
	
	private static final long serialVersionUID = 1L;
	
}
