import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { personDetailsFormModel } from 'src/app/interfaces/person-details-form.model';

@Component({
  selector: 'app-personal-details-form',
  templateUrl: './personal-details-form.component.html',
  styleUrls: ['./personal-details-form.component.css']
})
export class PersonalDetailsFormComponent implements OnInit {

  form: FormGroup;
  @Input() formGroupName: string;
  constructor(private rootFormGroup:FormGroupDirective) { }

  ngOnInit(): void {
   this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

}
