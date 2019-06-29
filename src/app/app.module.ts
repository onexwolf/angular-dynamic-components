import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DialogModule } from './dialog/dialog.module';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    DialogModule
  ],
  entryComponents: [
    ExampleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
