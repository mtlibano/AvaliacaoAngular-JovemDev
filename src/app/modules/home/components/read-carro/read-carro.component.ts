import { Component, OnInit } from '@angular/core';
import { Carro } from '../../models/carro';
import { CarroServiceService } from '../../services/carro.service.service';

@Component({
  selector: 'app-read-carro',
  templateUrl: './read-carro.component.html',
  styleUrls: ['./read-carro.component.scss']
})
export class ReadCarroComponent implements OnInit {

  list: Carro[] = [];

  constructor(private service: CarroServiceService) {}

  ngOnInit(): void {
    this.list = this.service.getListAll();
  }

  deleteCarro(index: number) {
    this.service.removeCarro(index);
  }

  selectCarro(index: number) {
    this.service.getCarro(index);
  }

}
