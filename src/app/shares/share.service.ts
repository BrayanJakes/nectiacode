import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Computadora, Vehiculo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http: HttpClient) { }

  getVehiculos(){
    return this.http.get('https://63365d6265d1e8ef266b83bb.mockapi.io/api/v1/vehiculo')
  }

  createVehiculo(body: Partial<Vehiculo>){
    return this.http.post('https://63365d6265d1e8ef266b83bb.mockapi.io/api/v1/vehiculo', body)
  }

  editarVehiculo(body: Partial<Vehiculo>, idVehiculo: string){
    return this.http.put(`https://63365d6265d1e8ef266b83bb.mockapi.io/api/v1/vehiculo/${idVehiculo}`, body)
  }

  eliminarVehiculo(idVehiculo: string){
    return this.http.delete(`https://63365d6265d1e8ef266b83bb.mockapi.io/api/v1/vehiculo/${idVehiculo}`)
  }

  // enpoint para lo relacione a computadoras
  getComputadoras(){
    return this.http.get('https://63365d6265d1e8ef266b83bb.mockapi.io/api/v1/computadora')
  }

  createComputadora(body: Partial<Computadora>){
    return this.http.post('https://63365d6265d1e8ef266b83bb.mockapi.io/api/v1/computadora', body)
  }

  editarComputadora(body: Partial<Computadora>, idComputadora: string){
    return this.http.put(`https://63365d6265d1e8ef266b83bb.mockapi.io/api/v1/computadora/${idComputadora}`, body)
  }

  eliminarComputadora(idComputadora: string){
    return this.http.delete(`https://63365d6265d1e8ef266b83bb.mockapi.io/api/v1/computadora/${idComputadora}`)
  }
}
