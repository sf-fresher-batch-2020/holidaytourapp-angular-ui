import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
