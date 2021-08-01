import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ex1HeaderComponent } from './Ex1/ex1-header/ex1-header.component';
import { Ex1ContentComponent } from './Ex1/ex1-content/ex1-content.component';
import { Ex1SidebarComponent } from './Ex1/ex1-sidebar/ex1-sidebar.component';
import { Ex1FooterComponent } from './Ex1/ex1-footer/ex1-footer.component';
import { Ex1HomeComponent } from './Ex1/ex1-home/ex1-home.component';
import { DemoDatabindingComponent } from './demo-databinding/demo-databinding.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { Ex2HomeComponent } from './Ex2/ex2-home/ex2-home.component';
import { Ex3HomeComponent } from './Ex3/ex3-home/ex3-home.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1HeaderComponent,
    Ex1ContentComponent,
    Ex1SidebarComponent,
    Ex1FooterComponent,
    Ex1HomeComponent,
    DemoDatabindingComponent,
    DemoDirectivesComponent,
    Ex2HomeComponent,
    Ex3HomeComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
