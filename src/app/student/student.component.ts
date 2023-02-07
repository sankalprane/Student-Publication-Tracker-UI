import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../service/student-service.service';

interface Student {
  id?: number,
  email?: string
  firstName?: string,
  lastName?: string,
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  StudentList: Student[] = [];

  studentForm = new FormGroup({
    id: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  deleteStudentForm = new FormGroup({
    id: new FormControl('', Validators.required),
  });

  constructor(private studentService: StudentService) {}

  getListOfStudents() {
    this.studentService.getStudentList()
      .subscribe((res: any) => {
        console.log(res);
        this.StudentList = res;
      }
    )
  }

  createStudent(data: any) {
    this.studentService.createStudent(data)
      .subscribe((res: any) => {
        console.log(res);
        this.getListOfStudents();
      }
    )
  }

  // updateStudent(id: number) {
  //   const data = {
  //     id: 1,
  //     name: "Jack"
  //   }
  //   this.studentService.updateStudent(id, data)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       this.getListOfStudents();
  //     }
  //   )
  // }

  deleteStudent() {
    let id: any = this.deleteStudentForm.get('id')?.value;
    this.studentService.deleteStudent(id)
      .subscribe((res: any) => {
        console.log(res);
        this.getListOfStudents();
      }
    )
  }


  ngOnInit(): void {
    this.getListOfStudents();
  }


  onSubmit() {
    // console.log(this.studentForm.controls.id.value)
    // let data = {
    //   id: this.studentForm.value.id,
    //   name: this.studentForm.value.name,
    // }
    this.createStudent(this.studentForm.value);
  }
}
