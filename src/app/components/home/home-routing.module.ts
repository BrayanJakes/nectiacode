import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ComputadorasComponent } from './computadoras/computadoras.component';
import { HomeComponent } from './home/home.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
      { path: 'auto', component: VehiculosComponent, },
      { path: 'pc', component: ComputadorasComponent, },
      { path: '**', redirectTo: 'auto' },
   ]

  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
