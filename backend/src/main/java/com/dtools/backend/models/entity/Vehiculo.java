package com.dtools.backend.models.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="Vehiculo")
public class Vehiculo implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "fk_empresa_id")
	private Double empresa;
	private String placa;
	private String motor;
	private String chasis;
	private String modelo;
	
	@Column(name = "fecha_matricula")
	@Temporal(TemporalType.DATE)
	private Date fechaMatricula;//date
	
	@Column(name = "pasajeros_sentados")
	private Double pasajerosSentados;
	
	@Column(name = "pasajeros_dpie")
	private Double pasajerosPie;
	
	@Column(name = "peso_seco")
	private Float pesoSeco;
	
	@Column(name = "peso_bruto")
	private Float pesoBruto;
	
	@Column(name = "numero_puertas")
	private Double numeroPuertas;
	private String marca;
	private String linea;
	private Boolean vinculacion;
	
	@PrePersist
	public void prePersist() {
		fechaMatricula=new Date();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Double getEmpresa() {
		return empresa;
	}
	public void setEmpresa(Double empresa) {
		this.empresa = empresa;
	}
	public String getPlaca() {
		return placa;
	}
	public void setPlaca(String placa) {
		this.placa = placa;
	}
	public String getMotor() {
		return motor;
	}
	public void setMotor(String motor) {
		this.motor = motor;
	}
	public String getChasis() {
		return chasis;
	}
	public void setChasis(String chasis) {
		this.chasis = chasis;
	}
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public Date getFechaMatricula() {
		return fechaMatricula;
	}
	public void setFechaMatricula(Date fechaMatricula) {
		this.fechaMatricula = fechaMatricula;
	}
	public Double getPasajerosSentados() {
		return pasajerosSentados;
	}
	public void setPasajerosSentados(Double pasajerosSentados) {
		this.pasajerosSentados = pasajerosSentados;
	}
	public Double getPasajerosPie() {
		return pasajerosPie;
	}
	public void setPasajerosPie(Double pasajerosPie) {
		this.pasajerosPie = pasajerosPie;
	}
	public Float getPesoSeco() {
		return pesoSeco;
	}
	public void setPesoSeco(Float pesoSeco) {
		this.pesoSeco = pesoSeco;
	}
	public Float getPesoBruto() {
		return pesoBruto;
	}
	public void setPesoBruto(Float pesoBruto) {
		this.pesoBruto = pesoBruto;
	}
	public Double getNumeroPuertas() {
		return numeroPuertas;
	}
	public void setNumeroPuertas(Double numeroPuertas) {
		this.numeroPuertas = numeroPuertas;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getLinea() {
		return linea;
	}
	public void setLinea(String linea) {
		this.linea = linea;
	}
	public Boolean getVinculacion() {
		return vinculacion;
	}
	public void setVinculacion(Boolean vinculacion) {
		this.vinculacion = vinculacion;
	}
	
	
	private static final long serialVersionUID = 1L;
	
}
