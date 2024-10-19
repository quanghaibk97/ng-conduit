import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PopularTagsComponent } from './ui/popular-tags/popular-tags.component';



@NgModule({
  declarations: [
    HomeComponent,
    PopularTagsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    PopularTagsComponent
  ]
})
export class HomeModule { }
