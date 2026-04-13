import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../services/api';

@Component({
  selector: 'app-qrcode',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './qrcode.html',
  styleUrl: './qrcode.scss',
})
export class Qrcode {
  userInput: string = '';
  imageURL: string = '';
  qrSize: number = 300;
  mode: 'text' | 'url' = 'url';
  finalApiUrl: string = ''; 

  constructor(private api: Api, private cdr: ChangeDetectorRef) {}

 updateQR() {
  if (!this.userInput.trim()) {
    alert("Please enter some content first!");
    return;
  }

  const endpoint = this.mode === 'text' ? 'qrcode/generate' : 'qrcode/generate_with_image';
  const body = this.mode === 'text' 
    ? { text: this.userInput, width: this.qrSize, height: this.qrSize }
    : { text: this.userInput, imageURL: this.imageURL };

  this.api.postAll(endpoint, body).subscribe({
    next: (res: any) => {
      let rawData = res.result; 

      if (!rawData) {
        console.error("API returned empty result");
        return;
      }
      if (typeof rawData === 'string' && !rawData.startsWith('data:image')) {
        this.finalApiUrl = `data:image/png;base64,${rawData}`;
      } else {
        this.finalApiUrl = rawData;
      }

      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error("API Error:", err);
    }
  });
}

downloadImage() {
  if (!this.finalApiUrl) return;

  const link = document.createElement('a');
  link.href = this.finalApiUrl;
  link.download = `qr-code-${Date.now()}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
}