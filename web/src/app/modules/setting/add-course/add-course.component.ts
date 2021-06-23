import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addCourseForm: FormGroup;
  srcResult: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addCourseForm = this._formBuilder.group({
      courseNameCrtl: ['', Validators.required],
      courseCodeCrtl: ['', Validators.required],
      syllabusCrtl: ['', Validators.required],
      deptId: ['', Validators.required],
    })
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

}
