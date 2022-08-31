import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
const API = environment.API;
import { HttpClient } from '@angular/common/http';
import { Movies } from '../interfaces/movies.interface';
import { Theaters } from './../interfaces/theaters.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {
  }


  public getCollections() {
    return this.http.get<Movies[]>(`${API}`);
  }

  public getTheaters(id: any) {
    return this.http.get<Theaters[]>(`${API}/${id}/theaters`);
  }


}
