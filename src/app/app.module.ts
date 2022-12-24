import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, Routes,RouterModule}  from '@angular/router';
import { AppComponent } from './app.component';
import { FeatureDetailsFormComponent } from './components/feature-details-form/feature-details-form.component';
import { PersonalDetailsFormComponent } from './components/personal-details-form/personal-details-form.component';
import { CreateMobComponent } from './pages/create-mob/create-mob.component';
import { EditMobComponent } from './pages/edit-mob/edit-mob.component';

const routes : Routes= [
  {
    path :'create-mob',  component: CreateMobComponent
  },
  {
    path :'edit-mob',  component: EditMobComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CreateMobComponent,
    EditMobComponent,
    PersonalDetailsFormComponent,
    FeatureDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
