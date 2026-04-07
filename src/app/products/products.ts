import { ChangeDetectorRef, Component } from '@angular/core';
import { Api } from '../services/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {  
onCount = 1;
nextN() {
  this.onCount++;
  console.log(this.onCount);
}
prevN() {
  if (this.onCount > 1) {
    this.onCount--;
  }
  console.log(this.onCount);
}
  constructor(private api : Api,private  cdr : ChangeDetectorRef) {}
  products: any;
  productBtn: any;
  totalPages = 4; 
  currentPage = 1;   
  selectedValue: string = '12'  
    get pages(): number[] {
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.totalPages, this.currentPage + 2);
    const pages: number[] = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  goToPage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.loadProducts();
  }
}
goToFirst() {
  this.currentPage = 1;
  this.loadProducts();
}
goToLast() {
  this.currentPage = this.totalPages;
  this.loadProducts();
}
goToPrevious() {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.loadProducts();
  }
}
goToNext() {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.loadProducts();
  }
}
  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedValue = target.value;
    console.log('Selected:', this.selectedValue);
  }

    ngOnInit() {
    this.api.getAll(`shop/products/all?page_index=${this.currentPage}&page_size=${this.selectedValue}`).subscribe((res: any) => {
    this.products = res.products;
    console.log(this.products);
    this.cdr.detectChanges();
    console.log(this.currentPage);
    console.log(this.selectedValue);
  })}

  loadProducts() {
  this.api.getAll(
    `shop/products/all?page_index=${this.currentPage}&page_size=${this.selectedValue}`
  ).subscribe({
    next: (res: any) => {
      this.products = res.products; 
      console.log('Products:', this.products);
    },
  });
}

newArrOfBr = [];

giveBrands(){
  this.api.getAll(`products/brands`).subscribe((res: any) => {
    this.newArrOfBr = res.brands;
    console.log(this.newArrOfBr);
    this.cdr.detectChanges();
  }) 
}

}

