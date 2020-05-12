import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AuthComponent } from 'src/app/Authentication/auth/auth.component';


AuthComponent


const router:Routes=[
    
    {path:'',component:AuthComponent}
]

@NgModule({  
    declarations: [
        AuthComponent
       
    ],
    
  
    imports: [
      CommonModule,
      RouterModule.forChild(router),
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule ,
      MatIconModule
      
      
    ],
    providers: [],
    bootstrap:[]
  })
  export class AuthModule { }