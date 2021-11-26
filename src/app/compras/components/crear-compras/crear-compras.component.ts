import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compra } from '../../models/Compra';
import { ComprasService } from '../../services/compras.service';

@Component({
  selector: 'app-crear-compras',
  templateUrl: './crear-compras.component.html',
  styleUrls: ['./crear-compras.component.css']
})
export class CrearComprasComponent implements OnInit {
  comprasForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _comprasService: ComprasService) {
    this.comprasForm = this.fb.group({
      descripcion: ['', Validators.required],
      valor: ['', Validators.required],
      categoria: ['', Validators.required],
      cantidad: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  guardarCompra() {

    const COMPRA: Compra = {
      descripcion: this.comprasForm.get('descripcion')?.value,
      valor: this.comprasForm.get('valor')?.value,
      categoria: this.comprasForm.get('categoria')?.value,
      cantidad: this.comprasForm.get('cantidad')?.value
    }

    console.log(COMPRA)
    this._comprasService.guardarCompra(COMPRA).subscribe(data => {
      this.router.navigate(['/compras'])
    }, error => {
      console.log(error);
      this.comprasForm.reset();
    })

  }
}
