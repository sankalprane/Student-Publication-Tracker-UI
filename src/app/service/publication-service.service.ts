import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  public getPublicationsByStudentId(id: number) {
    return this.http.get('http://127.0.0.1:8080/publication/student/' +id+ 'publications/');
  }
}
