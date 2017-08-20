import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { FirstComponent } from './first.component'
import { SecondComponent } from './second.component'

let mainRoutes: Routes = [{
  path: "first",
  component: FirstComponent
}]

mainRoutes.push({
  path: "second",
  component: SecondComponent
})

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    RouterModule.forRoot(mainRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
