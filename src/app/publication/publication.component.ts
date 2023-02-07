import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PublicationService } from '../service/publication-service.service';

interface Publication {
  publicationId?: number,
  title?: string
  year?: number,
  studentId?: number,
}

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent {

  PublicationList: Publication[] = [];

  publicationForm = new FormGroup({
    publicationId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    studentId: new FormControl('', Validators.required),
  });

  constructor(private publicationService: PublicationService) {}

  getListOfStudents(id: any) {
    this.publicationService.getPublicationsByStudentId(id)
      .subscribe((res: any) => {
        console.log(res);
        this.PublicationList = res;
      }
    )
  }

  onSubmit() {
    console.log('s');
  }

}
