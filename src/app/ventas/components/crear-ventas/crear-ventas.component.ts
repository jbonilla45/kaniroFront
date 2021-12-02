import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasService } from '../../services/ventas.service';
import { Venta } from '../../models/Venta';
import { Producto } from 'src/app/productos/models/Producto';
import { ProductosService } from 'src/app/productos/sevices/productos.service';
import { isTemplateExpression } from 'typescript';
import { ProductoVenta } from '../../models/ProductoVenta';

@Component({
    selector: 'app-crear-ventas',
    templateUrl: './crear-ventas.component.html',
    styleUrls: ['./crear-ventas.component.css']
})

export class CrearVentasComponent implements OnInit {

    ventaForm: FormGroup;
    titulo: string = 'Crear venta';

    idVenta: string | null = null

    listaProductos: Producto[] = []

    listaProductosVenta: ProductoVenta[] = []

    cantidadProd: number = 0

    // fechaRegistro: Date | undefined = undefined
    // vendedor: string = ""
    // productos: ProductoVenta[] = []
    // valor: number = 0

    constructor(private fb: FormBuilder, private router: Router, private VentasSrv: VentasService, private aRouter: ActivatedRoute, private productosService: ProductosService) {
        this.ventaForm = this.fb.group({
            vendedor: ['', Validators.required],
            productos: ['', Validators.required],
            valor: ['', Validators.required]
        })
        this.idVenta = this.aRouter.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        // this.cargarVenta()
        this.cargarProductos();
        this.esEditar();
    }

    cargarProductos() {
        this.productosService.getProductos().subscribe(data => {
            this.listaProductos = data
            console.log(data);
        })
    }

    guardarVenta() {
        const venta: Venta = {
            vendedor: this.ventaForm.get('vendedor')?.value,
            productos: this.ventaForm.get('productos')?.value,
            valor: this.ventaForm.get('valor')?.value
        }

        if (this.idVenta !== null) {
            this.VentasSrv.guardarVenta(venta).subscribe(data => {
                this.router.navigate(['/ventas'])
            }, error => {
                console.log(error);
                this.ventaForm.reset();
            })

        } else {
            console.log(venta)
            this.VentasSrv.guardarVenta(venta).subscribe(data => {
                this.router.navigate(['/ventas'])
            }, error => {
                console.log(error);
                this.ventaForm.reset();
            })
        }
    }

    esEditar() {
        if (this.idVenta !== null) {
            this.titulo = "editar venta";
            this.VentasSrv.getVenta(this.idVenta).subscribe(data => {
                this.ventaForm.setValue({
                    descripcion: data.descripcion,
                    vendedor: data.vendedor,
                    productos: data.productos,
                    valor: data.productos
                })
            })
        }
    }

    // cargarVenta(): void {
    //     if (this.idVenta == null) {
    //         this.fechaRegistro = new Date()
    //         this.vendedor = ""
    //         this.productos = []
    //         this.valor = 0
    //     }
    //     else {
    //         this.titulo = "editar venta";
    //         this.VentasSrv.getVenta(this.idVenta).subscribe(data => {
    //             this.ventaForm.setValue({
    //                 vendedor: data.vendedor,
    //                 productos: data.productos,
    //             })
    //         })
    //     }
    // }

    // guardarVenta(): void {
    //     const venta: Venta = {
    //         idVenta: this.idVenta,
    //         fechaRegistro: this.fechaRegistro,
    //         vendedor: this.ventaForm.get('vendedor')?.value,
    //         productos: this.ventaForm.get('productos')?.value,
    //         valor: this.ventaForm.get('valor')?.value
    //     }

    //     this.VentasSrv.guardarVenta(venta).subscribe(data => {
    //         console.log('La venta del [fecha] fue registrada con exito!');
    //         this.router.navigate(['/ventas']);
    //     }, error => {
    //         console.log(error);
    //     })
    // }

}
