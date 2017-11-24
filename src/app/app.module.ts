import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Halaman1Component } from './components/pages/halaman-1/halaman-1.component';
import { Halaman2Component } from './components/pages/halaman-2/halaman-2.component';
import { Halaman3Component } from './components/pages/halaman-3/halaman-3.component';
import { LoadingComponent } from './components/utils/loading/loading.component';

const routers : Routes = [
  { path: '', redirectTo: 'halaman1', pathMatch: 'full' },
  { path: "halaman1", component: Halaman1Component, data: { name: 'halaman1' } },
  { path: "halaman2", component: Halaman2Component, data: { name: 'halaman2' } },
  { path: "halaman3", component: Halaman3Component, data: { name: 'halaman3' } }
]

@NgModule({
  declarations: [
    AppComponent,
    Halaman1Component,
    Halaman2Component,
    Halaman3Component,
    LoadingComponent
  ],
  imports: [
    RouterModule.forRoot(routers),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
