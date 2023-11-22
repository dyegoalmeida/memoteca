import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { CreateThoughtComponent } from './component/thoughts/create-thought/create-thought.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListThoughtComponent } from './component/thoughts/list-thought/list-thought.component';
import { ThoughtComponent } from './component/thoughts/thought/thought.component';
import { HttpClientModule } from "@angular/common/http";
import { DeleteThoughtComponent } from './component/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './component/thoughts/edit-thought/edit-thought.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent,
    DeleteThoughtComponent,
    EditThoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
