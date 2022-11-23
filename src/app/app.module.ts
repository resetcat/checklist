import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';
import { UserCardComponent } from './pages/users/user-card/user-card.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PlannerComponent,
    HeaderComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    UsersComponent,
    UserCardComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
