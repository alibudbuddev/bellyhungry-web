import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '@shared/modules';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ElementsModule
  ]
})
export class HomeModule { }
