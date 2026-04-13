import { ChangeDetectorRef, Component } from '@angular/core';
import { Api } from '../services/api';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  constructor(private api: Api, private cdr: ChangeDetectorRef) {}
  ImageForHeader: any;

  ngOnInit() {
    this.api.getAll(`qrcode`).subscribe((res) => {
      console.log(res);
      this.ImageForHeader = res;
      this.cdr.detectChanges();
    });
  }

  
}
