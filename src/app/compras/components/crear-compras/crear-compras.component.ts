import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from '../../models/Compra';
import { ComprasService } from '../../services/compras.service';

@Component({
  selector: 'app-crear-compras',
  templateUrl: './crear-compras.component.html',
  styleUrls: ['./crear-compras.component.css']
})
export class CrearComprasComponent implements OnInit {
  comprasForm: FormGroup;
  titulo = "Crear Compra";
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _comprasService: ComprasService,
    private aRouter: ActivatedRoute) {
    this.comprasForm = this.fb.group({
      descripcion: ['', Validators.required],
      valor: ['', Validators.required],
      categoria: ['', Validators.required],
      cantidad: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  guardarCompra() {

    const COMPRA: Compra = {
      descripcion: this.comprasForm.get('descripcion')?.value,
      valor: this.comprasForm.get('valor')?.value,
      categoria: this.comprasForm.get('categoria')?.value,
      cantidad: this.comprasForm.get('cantidad')?.value
    }

    if (this.id !== null) {
      this._comprasService.editarCompra(this.id, COMPRA).subscribe(data => {
        this.router.navigate(['/compras'])
      }, error => {
        console.log(error);
        this.comprasForm.reset();
      })

    } else {
      console.log(COMPRA)
      this._comprasService.guardarCompra(COMPRA).subscribe(data => {
        this.router.navigate(['/compras'])
      }, error => {
        console.log(error);
        this.comprasForm.reset();
      })
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = "editar compra";
      this._comprasService.obtenerCompra(this.id).subscribe(data => {
        this.comprasForm.setValue({
          descripcion: data.descripcion,
          cantidad: data.cantidad,
          valor: data.valor,
          categoria: data.categoria

        })
      })
    }
  }
}
