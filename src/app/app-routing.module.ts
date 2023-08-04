import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { WelcomComponent } from './welcom/welcom.component';
import { DashbordUserComponent } from './dashbord-user/dashbord-user.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { FormOpeComponent } from './form-ope/form-ope.component';
import { FormTLComponent } from './form-tl/form-tl.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'login', component: LoginComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'welcom', component: WelcomComponent },
  { path: 'dashbord-admin', component: DashbordAdminComponent },
  { path: 'dashbord-user', component: DashbordUserComponent },
  { path: 'form-ope', component: FormOpeComponent },
  { path: 'form-tl', component: FormTLComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
