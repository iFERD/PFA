import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown'; // Correct import statement

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginComponent } from './pages/login/login.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { WelcomComponent } from './welcom/welcom.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { DashbordUserComponent } from './dashbord-user/dashbord-user.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { FormOpeComponent } from './form-ope/form-ope.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { FormTLComponent } from './form-tl/form-tl.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzRateModule } from 'ng-zorro-antd/rate';




registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormulaireComponent,
    WelcomComponent,
    DashbordUserComponent,
    DashbordAdminComponent,

    FormOpeComponent,
     FormTLComponent,    
  ],
  imports: [
  
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzImageModule,
    NzFormModule,
    NzInputModule,
    CommonModule,
    NzTimePickerModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzUploadModule,
    NzTableModule,
    NzProgressModule,
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzRadioModule,
    NzDropDownModule,
    NzTabsModule,
    NzSelectModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzDividerModule,
    NzCascaderModule,
    NzPopoverModule,
    NzRateModule,
  
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
