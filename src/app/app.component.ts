import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginForm;

  constructor(private http: HttpClient) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', Validators.required)
    });
  }



  logSubmit(form) {
    this.http.post<any>('http://127.0.0.1:3000', {}).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data.token);
    });
  }
}
