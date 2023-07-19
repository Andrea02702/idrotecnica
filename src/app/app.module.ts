import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import {MatMenuModule} from '@angular/material/menu'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header/header.component';
import { FooterComponent } from './component/footer/footer/footer.component';
import { CardChiSiamoComponent } from './component/card/card-chi-siamo/card-chi-siamo.component';
import { CardCompetenzeComponent } from './component/card/card-competenze/card-competenze.component';
import { CardContattiComponent } from './component/card/card-contatti/card-contatti.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardChiSiamoComponent,
    CardCompetenzeComponent,
    CardContattiComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatMenuModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
