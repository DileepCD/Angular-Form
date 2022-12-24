import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { featureDetailsFormModel } from 'src/app/interfaces/features-form.model';

@Component({
  selector: 'app-feature-details-form',
  templateUrl: './feature-details-form.component.html',
  styleUrls: ['./feature-details-form.component.css']
})
export class FeatureDetailsFormComponent implements OnInit {
  form:FormGroup;
  constructor(private rootFormGroup: FormGroupDirective ) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get('featureDetailsForm') as FormGroup;
  }
  savefeatures(){
    
  }
}
