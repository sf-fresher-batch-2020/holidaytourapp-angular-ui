import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import{ DestinationComponent } from './destination/destination.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewdestinationComponent } from './viewdestination/viewdestination.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'destination', component: DestinationComponent },
  { path: 'viewdestination/:id', component: ViewdestinationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
