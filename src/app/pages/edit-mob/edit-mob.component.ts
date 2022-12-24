import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mobFormModel } from 'src/app/interfaces/mob-form.model';

@Component({
  selector: 'app-edit-mob',
  templateUrl: './edit-mob.component.html',
  styleUrls: ['./edit-mob.component.css']
})
export class EditMobComponent implements OnInit {
  editMobForm : FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  this.editMobForm = new FormGroup(
    {
      personDetailsForm: new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required)
      }),
      featureDetailsForm: new FormGroup({
        'hairColor': new FormControl(null, Validators.required),
        'eyeColor': new FormControl(null, Validators.required)
      })
    }
  );

  const mobDetails : mobFormModel = {
  personDetails: {
    firstName:'Dileep',
    lastName:'C D'
  },
  featureDetails:{
    hairColor:'black',
    eyeColor:'black'
  }};

  this.editMobForm.setValue({
    personDetailsForm: mobDetails.personDetails,
    featureDetailsForm:mobDetails.featureDetails
  });

  }
  onSave() {
    console.log(this.editMobForm.value);
    console.log(this.editMobForm.valid);
    return false;
  }

}
