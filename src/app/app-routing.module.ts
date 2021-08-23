import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './MyComponents/collection/collection.component';
import { FavListComponent } from './MyComponents/fav-list/fav-list.component';

const routes: Routes = [
 
    {path: 'favlist',component:FavListComponent},
    {path: 'home',component:CollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [FavListComponent,CollectionComponent]
