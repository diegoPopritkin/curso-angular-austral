import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
@Input() destino: DestinoViaje;
@HostBinding ('class') classAttr = 'col-md-4'

  constructor() { }

  ngOnInit(): void {
    if(!this.destino) {
      this.destino = new DestinoViaje("default","")
    }
  }

}
