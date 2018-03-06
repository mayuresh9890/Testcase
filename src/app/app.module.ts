import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserIdleModule } from 'angular-user-idle';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { BsModalModule } from 'ng2-bs3-modal';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent,pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpModule,
    UserIdleModule.forRoot({idle: 60, timeout: 30, ping: 30}),
    BsModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
