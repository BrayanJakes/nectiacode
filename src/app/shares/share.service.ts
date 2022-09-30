import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computadora, Vehiculo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  uri = 'https://63365d6265d1e8ef266b83bb.mockapi.io/api/v1'

  constructor(private http: HttpClient) { }

  getVehiculos(){
    return this.http.get(`${this.uri}/vehiculo`)
  }

  createVehiculo(body: Partial<Vehiculo>){
    return this.http.post(`${this.uri}/vehiculo`, body)
  }

  editarVehiculo(body: Partial<Vehiculo>, idVehiculo: string){
    return this.http.put(`${this.uri}/vehiculo/${idVehiculo}`, body)
  }

  eliminarVehiculo(idVehiculo: string){
    return this.http.delete(`${this.uri}/vehiculo/${idVehiculo}`)
  }

  // enpoint para lo relacione a computadoras
  getComputadoras(){
    return this.http.get(`${this.uri}/computadora`)
  }

  createComputadora(body: Partial<Computadora>){
    return this.http.post(`${this.uri}/computadora`, body)
  }

  editarComputadora(body: Partial<Computadora>, idComputadora: string){
    return this.http.put(`${this.uri}/computadora/${idComputadora}`, body)
  }

  eliminarComputadora(idComputadora: string){
    return this.http.delete(`${this.uri}/computadora/${idComputadora}`)
  }
}
