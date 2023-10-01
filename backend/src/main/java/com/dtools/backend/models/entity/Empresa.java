package com.dtools.backend.models.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Empresa")
public class Empresa implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "tipo_empresa")
	private String tipoEmpresa;
	
	@Column(name = "numero_empresa")
	private Double numeroEmpresa;
	
	@Column(name = "nombre_empresa")
	private String nombreEmpresa;
	
	@Column(name = "direccion_empresa")
	private String direccionEmpresa;
	
	@Column(name = "pais_empresa")
	private String paisEmpresa;
	
	@Column(name = "departamento_empresa")
	private String departamentoEmpresa;
	
	@Column(name = "ciudad_empresa")
	private String ciudadEmpresa;
	
	@Column(name = "telefono_empresa")
	private Double telefonoEmpresa;
	
	@Column(name = "tipo_responsable")
	private String tipoResponsable;
	
	@Column(name = "numero_responsable")
	private Double numeroResponsable;
	
	@Column(name = "nombre_responsable")
	private String nombreResponsable;
	
	@Column(name = "direccion_responsable")
	private String direccionResponsable;
	
	@Column(name = "telefono_responsable")
	private Double telefonoesponsable;
	
	@Column(name = "pais_responsable")
	private String paisresponsable;
	
	@Column(name = "departamento_responsable")
	private String departamentoresponsable;
	
	@Column(name = "ciudad_responsable")
	private String ciudadResponsable;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTipoEmpresa() {
		return tipoEmpresa;
	}
	
	public Double getNumeroEmpresa() { 
		return numeroEmpresa;
	}

	public void setNumeroEmpresa(Double numeroEmpresa) {
		this.numeroEmpresa = numeroEmpresa;
	}

	public void setTipoEmpresa(String tipoEmpresa) {
		this.tipoEmpresa = tipoEmpresa;
	}

	public String getNombreEmpresa() {
		return nombreEmpresa;
	}

	public void setNombreEmpresa(String nombreEmpresa) {
		this.nombreEmpresa = nombreEmpresa;
	}

	public String getDireccionEmpresa() {
		return direccionEmpresa;
	}

	public void setDireccionEmpresa(String direccionEmpresa) {
		this.direccionEmpresa = direccionEmpresa;
	}

	public String getPaisEmpresa() {
		return paisEmpresa;
	}

	public void setPaisEmpresa(String paisEmpresa) {
		this.paisEmpresa = paisEmpresa;
	}

	public String getDepartamentoEmpresa() {
		return departamentoEmpresa;
	}

	public void setDepartamentoEmpresa(String departamentoEmpresa) {
		this.departamentoEmpresa = departamentoEmpresa;
	}

	public String getCiudadEmpresa() {
		return ciudadEmpresa;
	}

	public void setCiudadEmpresa(String ciudadEmpresa) {
		this.ciudadEmpresa = ciudadEmpresa;
	}

	public Double getTelefonoEmpresa() {
		return telefonoEmpresa;
	}

	public void setTelefonoEmpresa(Double telefonoEmpresa) {
		this.telefonoEmpresa = telefonoEmpresa;
	}

	public String getTipoResponsable() {
		return tipoResponsable;
	}

	public void setTipoResponsable(String tipoResponsable) {
		this.tipoResponsable = tipoResponsable;
	}

	public Double getNumeroResponsable() {
		return numeroResponsable;
	}

	public void setNumeroResponsable(Double numeroResponsable) {
		this.numeroResponsable = numeroResponsable;
	}

	public String getNombreResponsable() {
		return nombreResponsable;
	}

	public void setNombreResponsable(String nombreResponsable) {
		this.nombreResponsable = nombreResponsable;
	}

	public String getDireccionResponsable() {
		return direccionResponsable;
	}

	public void setDireccionResponsable(String direccionResponsable) {
		this.direccionResponsable = direccionResponsable;
	}

	public Double getTelefonoesponsable() {
		return telefonoesponsable;
	}

	public void setTelefonoesponsable(Double telefonoesponsable) {
		this.telefonoesponsable = telefonoesponsable;
	}

	public String getPaisresponsable() {
		return paisresponsable;
	}

	public void setPaisresponsable(String paisresponsable) {
		this.paisresponsable = paisresponsable;
	}

	public String getDepartamentoresponsable() {
		return departamentoresponsable;
	}

	public void setDepartamentoresponsable(String departamentoresponsable) {
		this.departamentoresponsable = departamentoresponsable;
	}

	public String getCiudadResponsable() {
		return ciudadResponsable;
	}

	public void setCiudadResponsable(String ciudadResponsable) {
		this.ciudadResponsable = ciudadResponsable;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	private static final long serialVersionUID = 1L;

}
