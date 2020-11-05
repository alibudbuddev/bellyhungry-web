import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '@shared/modules';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeCategoryListComponent } from './components/category-list/home-category-list.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [HomeComponent, HomeCategoryListComponent, ComingSoonComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ElementsModule
  ]
})
export class HomeModule { }
