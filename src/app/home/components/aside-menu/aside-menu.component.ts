import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {
  options: { name: string, route: string }[] = [
    { name: "Productos", route: '/productos' },
    { name: "Compras", route: '/compras' },
    { name: "Costos", route: '/costos' },
    { name: "Ventas", route: '/ventas' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
