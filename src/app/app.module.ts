import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';/* 
import { FavListComponent } from './MyComponents/fav-list/fav-list.component'; */
import { ListItemComponent } from './MyComponents/list-item/list-item.component';
import { CollectionComponent } from './MyComponents/collection/collection.component'

@NgModule({
  declarations: [
    AppComponent,
/*     FavListComponent, */
    ListItemComponent,
    routingComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
