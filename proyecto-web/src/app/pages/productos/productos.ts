import { Component } from '@angular/core';
import { Producto } from '../../models/producto/producto';
import { ProductoCard } from '../../components/producto-card/producto-card';
@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
   productos: Producto[] = [
    {
      id: 1,
      nombre: 'SuperGirl',
      precio: 15000,
      descripcion: 'SuperGirl (2026)'
      imagen: ''
    },
    {
      id: 2,
      nombre: 'Evil Dead: Burn',
      precio: 10000,
      descripcion: 'Evil Dead: Burn (2026)'
      imagen: ''
    }
    {
      id: 3,
      nombre: 'The Odyssey',
      precio: 28000,
      descripcion: 'The Odyssey (2026)'
      imagen: ''
    }
    {
      id: 4,
      nombre: 'Spider-Man Brand New Day',
      precio: 30000,
      descripcion: 'Spider-Man Brand New Day (2026)'
      imagen: ''
    }
    {
      id: 5,
      nombre: 'Clayface',
      precio: 12000,
      descripcion: 'Spider-Man Brand New Day (2026)'
      imagen: ''
    }
    {
      id: 6,
      nombre: 'The Hunger Games: Sunrise on the Reaping',
      precio: 12000,
      descripcion: 'The Hunger Games: Sunrise on the Reaping (2026)'
      imagen: ''
    }
    {
      id: 7,
      nombre: 'Avengers: Doomsday',
      precio: 12000,
      descripcion: 'Avengers: Doomsday (2026)'
      imagen: ''
    }
    {
      id: 8,
      nombre: 'Dune: Part Three',
      precio: 12000,
      descripcion: 'Dune: Part Three (2026)'
      imagen: ''
    }
  ]
}
