import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header/header.component';
import { CardChiSiamoComponent } from './component/card/card-chi-siamo/card-chi-siamo.component';
import { CardCompetenzeComponent } from './component/card/card-competenze/card-competenze.component';
import { CardContattiComponent } from './component/card/card-contatti/card-contatti.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'chi-siamo',component:CardChiSiamoComponent},
  {path:'competenze',component:CardCompetenzeComponent},
  {path:'contatto', component:CardContattiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
