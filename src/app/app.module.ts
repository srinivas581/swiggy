import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router} from "@angular/router";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import { HomeComponent } from './core/home/home.component';
// import { AuthModule } from './Authentication/auth/auth.module';
// import { AuthComponent } from './Authentication/auth/auth.component';






const router:Routes=[

  {path:"home",component:HomeComponent},
  {path:'auth',loadChildren:'./Authentication/auth/auth.module#AuthModule'}
]


@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent
  
    // AuthComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(router),
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
