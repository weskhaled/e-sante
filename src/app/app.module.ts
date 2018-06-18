import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { BloodComponent } from './user/info/blood/blood.component';
import { HeightComponent } from './user/info/height/height.component';
import { WeightComponent } from './user/info/weight/weight.component';
import { AllergyComponent } from './user/sante/allergy/allergy.component';
import { DiseaseComponent } from './user/sante/disease/disease.component';
import { MedicamentComponent } from './user/sante/medicament/medicament.component';
import { SurgeryComponent } from './user/sante/surgery/surgery.component';
import { VaccinationComponent } from './user/sante/vaccination/vaccination.component';
import { TeethComponent } from './user/sante/teeth/teeth.component';
import { DoctorComponent } from './user/medical/doctor/doctor.component';
import { ConsultationComponent } from './user/medical/consultation/consultation.component';
import { AnalysisComponent } from './user/medical/analysis/analysis.component';
import { RadiologyComponent } from './user/medical/radiology/radiology.component';
import { ImcComponent } from './user/info/imc/imc.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserComponent,
        TablesComponent,
        TypographyComponent,
        IconsComponent,
        NotificationsComponent,
        RegisterComponent,
        LoginComponent,
        ProfileComponent,
        BloodComponent,
        HeightComponent,
        WeightComponent,
        AllergyComponent,
        DiseaseComponent,
        MedicamentComponent,
        SurgeryComponent,
        VaccinationComponent,
        TeethComponent,
        DoctorComponent,
        ConsultationComponent,
        AnalysisComponent,
        RadiologyComponent,
        ImcComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NavbarModule,
        FooterModule,
        SidebarModule,
        RouterModule,
        AppRoutingModule,
        LbdModule,
        HttpClientModule,
        AngularDateTimePickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
