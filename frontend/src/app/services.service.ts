import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl:string = 'http://localhost:3000/api';
  // baseUrl:string = 'api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http:HttpClient) { }

  // Get select Movie for home page
  getMovies(): Observable<any> {
    let url= `${this.baseUrl}/list`
    return this.http.get(url,{headers:this.headers} )//.pipe(map((response:[])=> response.map(item => item['Name'])))
  }

  // Get select Movie names for selection box
  getMovieNames(): Observable<any> {
    let url= `${this.baseUrl}/movies`
    return this.http.get(url,{headers:this.headers} ).pipe(map((response:[])=> response.map(item => item['Name'])))
  }

  // Get full details of movie details for a selected item
  getMovieDetails(data): Observable<any> {
    let url= `${this.baseUrl}/search`
    return this.http.post(url,data,{headers:this.headers})
  }
}
