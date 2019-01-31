import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const BASE_URL = 'http://127.0.0.1:4287/';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signupformSend(data: any) {
    console.log('..data..', data)
    // const body = JSON.stringify(data);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(BASE_URL + 'api/signup/', data, {
        headers: headers
    })
       
  }
  private handleError(error: any) {
    return Observable.throw(error.json());
  }

  loginformSend(data: any) {
    // const body = JSON.stringify(data);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4287/' + 'api/login/', data, {
        headers: headers
    })
        
  }

  getUserDatas(){
    return this.http.get('http://localhost:4287/'+'api/getuserdatas/');
  }

  getBloodGroups(){
    return this.http.get('http://localhost:4287/'+'api/getbloodGroups/');
  }

  private setCurrentUser(data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  getCurrentUser() {
    var user = JSON.parse(localStorage.getItem("user"));
    return user;
  }
}
