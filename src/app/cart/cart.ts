import { ChangeDetectorRef, Component } from '@angular/core';
import { Api } from '../services/api';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  constructor(private api: Api, private cdr: ChangeDetectorRef) {}
  ngOnInit() {}
}
