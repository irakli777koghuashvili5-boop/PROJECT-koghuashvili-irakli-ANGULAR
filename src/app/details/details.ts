
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api';
import { Product } from '../model/model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-details',
  templateUrl: './details.html',
  styleUrls: ['./details.scss'],
  imports: [CommonModule],
})
export class Details {
  selectedId: number = 0;
productArr: any[] = [];
aProductArr: Product[] = [];

  constructor(
    private api: Api,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.selectedId = params['id'];
      console.log('Selected ID:', this.selectedId);
    });
  }


    ngOnInit() {
  this.api.getAll(`shop/products/id/${this.selectedId}`).subscribe((res: any) => {

    this.productArr = Object.entries(res).map(([key, value]) => value as any);
    this.aProductArr = res

    console.log('Converted array:', this.productArr);
    console.log(this.aProductArr);
    

    this.cdr.detectChanges();
  });
}


}
