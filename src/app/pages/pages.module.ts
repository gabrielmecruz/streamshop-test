import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgMaterialModule } from './../ng-material/ng-material.module';
import { HeaderComponent } from './../_widgets/header/header.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TheatersComponent } from './theaters/theaters.component';
import { TransactionService } from '../services/transaction.service';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'theaters/:id',
        component: TheatersComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    HeaderComponent,
    TheatersComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    FormsModule,
    NgMaterialModule,
    FontAwesomeModule

  ], providers: [TransactionService],
})
export class PagesModule { }
