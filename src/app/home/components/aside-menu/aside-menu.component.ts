import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {
  options: { nombre: string }[] = [
    { nombre: "Productos" },
    { nombre: "Compras" },
    { nombre: "Costos" },
    { nombre: "Ventas" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}