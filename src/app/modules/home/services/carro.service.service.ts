import { EventEmitter, Injectable } from '@angular/core';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroServiceService {

  public emitEvent = new EventEmitter();
  public emitCarro = new EventEmitter();

  carroSelected: Carro = {
    marca: '',
    placa: '',
    ano: 0,
    tipo: '',
  };

  constructor() { }  

  carros: Carro[] = [
    {
      marca: 'Max',
      placa: 'MKF4902',
      ano: 2010,
      tipo: 'Popular',
    },
    {
      marca: 'Niki',
      placa: 'MKG1221',
      ano: 2020,
      tipo:'Luxo',
    },
    {
      marca: 'Volks',
      placa: 'MKH4444',
      ano: 2022,
      tipo:'Carga',
    },
  ];

  addCarro(marca: string, placa: string, ano: number, tipo: string) {

    const existingCarro = this.carros.find((carro) => carro.placa === placa);

    if (existingCarro) {
      existingCarro.marca = marca;
      existingCarro.placa = placa;
      existingCarro.ano = ano;
      existingCarro.tipo = tipo;
    } else {
      this.carros.push({
        marca: marca,
        placa: placa,
        ano: ano,
        tipo: tipo,
      });
    }

    this.emitEvent.emit(this.carros.length);
    this.carros;
  }


  getListAll() {
    return this.carros;
  }

  removeCarro(index: number) {
    return this.carros.splice(index, 1);
  }

  getCarro(index: number) {
    this.carroSelected = this.carros[index];
    this.emitCarro.emit(this.carroSelected);
  }

}