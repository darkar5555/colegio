import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  panelOpenState: boolean = false;

  showFiller = false;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
   

  }

}
