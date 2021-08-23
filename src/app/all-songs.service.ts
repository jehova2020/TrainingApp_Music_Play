import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AllSongsService {

  constructor(private http: HttpClient) { }

  getSongs()
  {
      let url="https://jsonplaceholder.typicode.com/photos";
      return this.http.get(url);
  }

  /* getAlbums(){
    
    let url="https://jsonplaceholder.typicode.com/albums ";
      return this.http.get(url);
  } */
}
