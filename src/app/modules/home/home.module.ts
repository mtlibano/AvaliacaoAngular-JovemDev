import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home/home.component';
import { FormCarroComponent } from './components/form-carro/form-carro.component';
import { ReadCarroComponent } from './components/read-carro/read-carro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FormCarroComponent,
    ReadCarroComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
})
export class HomeModule { }
