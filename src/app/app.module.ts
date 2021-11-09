import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NoWebworkerComponent } from './no-webworker/no-webworker.component';
import { WithWebworkerComponent } from './with-webworker/with-webworker.component';

@NgModule({
  declarations: [
    AppComponent,
    NoWebworkerComponent,
    WithWebworkerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
