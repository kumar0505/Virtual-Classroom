import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.css']
})
export class AddDeptComponent implements OnInit {

  addDeptForm = new FormGroup({
    deptName: new FormControl('', [Validators.required]),
  })

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  onDeptSubmit() {
    let data = {
      deptName: this.addDeptForm.value.deptName,
      institute: 18
    }
    this._http.post('/api/department/addDepartment', data);
  }

}
