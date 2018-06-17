import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { BloodComponent } from './user/info/blood/blood.component';
import { HeightComponent } from './user/info/height/height.component';
import { WeightComponent } from './user/info/weight/weight.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AllergyComponent } from './user/sante/allergy/allergy.component';
import { DiseaseComponent } from './user/sante/disease/disease.component';
import { MedicamentComponent } from './user/sante/medicament/medicament.component';
import { SurgeryComponent } from './user/sante/surgery/surgery.component';
import { VaccinationComponent } from './user/sante/vaccination/vaccination.component';
import { TeethComponent } from './user/sante/teeth/teeth.component';
import { DoctorComponent } from './user/medical/doctor/doctor.component';
import { ConsultationComponent } from './user/medical/consultation/consultation.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AnalysisComponent } from './user/medical/analysis/analysis.component';
import { RadiologyComponent } from './user/medical/radiology/radiology.component';
import { ImcComponent } from './user/info/imc/imc.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'blood', component: BloodComponent },
  { path: 'height', component: HeightComponent },
  { path: 'weight', component: WeightComponent },
  { path: 'imc', component: ImcComponent },

  { path: 'allergy', component: AllergyComponent },
  { path: 'disease', component: DiseaseComponent },
  { path: 'medicament', component: MedicamentComponent },
  { path: 'surgery', component: SurgeryComponent },
  { path: 'vaccination', component: VaccinationComponent },
  { path: 'teeth', component: TeethComponent },

  { path: 'doctor', component: DoctorComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'radiology', component: RadiologyComponent },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
