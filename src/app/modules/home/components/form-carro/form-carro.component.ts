import { Component, OnInit } from '@angular/core';
import { Carro } from '../../models/carro';
import { CarroServiceService } from '../../services/carro.service.service';

@Component({
  selector: 'app-form-carro',
  templateUrl: './form-carro.component.html',
  styleUrls: ['./form-carro.component.scss']
})
export class FormCarroComponent implements OnInit {

  carroSelected: any = {};

  constructor(private service: CarroServiceService) {}

  public addCarroForm(
    marca: string,
    placa: string,
    ano: string,
    tipo: string
  ) {
    this.service.addCarro(marca, placa, parseInt(ano), tipo);
    this.limparCampos();
  }

  ngOnInit(): void {
    this.service.emitCarro.subscribe((carro: Carro) => {
      this.carroSelected = carro;
    });
  }

  limparCampos() {
    this.carroSelected = {};
  }

}
