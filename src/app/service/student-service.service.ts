import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getStudentList() {
    return this.http.get('http://127.0.0.1:8080/student/');
  }

  public deleteStudent = (id: number) => {
    return this.http.delete('http://127.0.0.1:8080/student/delete/' + id + '/');
  }

  public createStudent = (data: any) => {
    return this.http.post('http://127.0.0.1:8080/student/create/', data);
  }

  public updateStudent = (id:number, data: any) => {
    return this.http.put('http://127.0.0.1:8080/student/update/' +id + '/', data);
  }

  public getSingleStudent = (id: number) => {
    return this.http.get('http://127.0.0.1:8080/student/' +id + '/');
  }
}
