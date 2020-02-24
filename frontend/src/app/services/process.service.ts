import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Proceso } from '../models/proceso';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  urlApi = 'http://localhost:3000/process'
  constructor( private http: HttpClient) { }


  getProcess(){    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
    };

    return this.http.get(this.urlApi, httpOptions);
  }


  postProcess(proceso: Proceso) {
    const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})};
    return this.http.post(this.urlApi, proceso, httpOptions);
  }

  editProcess(proceso: Proceso) {
    const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})};
    return this.http.put(this.urlApi + `/${proceso._id}`, proceso, httpOptions);
  }

  deleteProcess(_id: string) {
    const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})};
    return this.http.delete(this.urlApi + `/${_id}`,  httpOptions);
  }


}
