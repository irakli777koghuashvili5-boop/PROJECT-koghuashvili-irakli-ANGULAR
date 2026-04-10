import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Api } from '../services/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  constructor(private api : Api, private cdr : ChangeDetectorRef) {}
  mainResp: any = {};
  email = '';
  password = '';
  
  onClickSignIn(){
    const userData = {
      email: this.email,
      password: this.password,
    }
    this.api.postAll(`auth/sign_in`, userData)
    .subscribe((res: any) => {
      console.log(`Post Response:`, res);  
      
       if(res.statusCode == 200 || res.statusCode == 201|| res.statusCode == 202 || res.statusCode == 203 || res.statusCode == 305 || res.statusCode != 304){
          localStorage.setItem('access_token', res.access_token);
          localStorage.setItem('refresh_token', res.refresh_token);
          }
      if(res.statusCode == 409){
            alert(`email not verified`)
      }

        this.cdr.detectChanges();
      
      if(res.access_token && res.refresh_token){
         this.api.getAllHeader(`auth` )
         .subscribe((res1: any) => {
          console.log(`Get Response:`, res1);
          if(res1.statusCode == 200 || res1.statusCode == 201|| res1.statusCode == 202 || res1.statusCode == 203 || res1.statusCode == 305 || res1.statusCode != 304){
            alert(`welcome back ${res1.userName}`)
            this.mainResp = res1;
            console.log(this.mainResp);
            window.location.href = `/products`
          }
         
        this.cdr.detectChanges();
      },
    )
    }
  }
  )
}
}
