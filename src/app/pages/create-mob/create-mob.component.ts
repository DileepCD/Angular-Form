import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mobFormModel } from 'src/app/interfaces/mob-form.model';

@Component({
  selector: 'app-create-mob',
  templateUrl: './create-mob.component.html',
  styleUrls: ['./create-mob.component.css']
})
export class CreateMobComponent implements OnInit {

  createMobForm : FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  this.createMobForm = new FormGroup(
    {
      'personDetailsForm': new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'lastname': new FormControl(null, Validators.required)
      }),
      'featureDetailsForm': new FormGroup({
        'hairColor': new FormControl(null, Validators.required),
        'eyeColor': new FormControl(null, Validators.required)
      })
    }
  );
  }
  onSave() {
    console.log(this.createMobForm.value);
    console.log(this.createMobForm.valid);
    return false;
  }


}
