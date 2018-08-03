import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EjdirectivangifComponent } from './components/ejdirectivangif/ejdirectivangif.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ejdirectivangif2Component } from './ejdirectivangif2/ejdirectivangif2.component';
import { EjdirectivangstyleComponent } from './components/ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './components/ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './components/ejdirectivangfor/ejdirectivangfor.component';
import { EjdirectivangforobjectComponent } from './components/ejdirectivangforobject/ejdirectivangforobject.component';
import { EjdirectivaswitchComponent } from './components/ejdirectivaswitch/ejdirectivaswitch.component';
import { EjmidirectivaDirective } from './directivas/ejmidirectiva.directive';
import { MidirectivaComponent } from './components/midirectiva/midirectiva.component';
import { OtradirectivaDirective } from './directivas/otradirectiva.directive';

@NgModule({
  declarations: [
    AppComponent,
    EjdirectivangifComponent,
    Ejdirectivangif2Component,
    EjdirectivangstyleComponent,
    EjdirectivangclassComponent,
    EjdirectivangforComponent,
    EjdirectivangforobjectComponent,
    EjdirectivaswitchComponent,
    EjmidirectivaDirective,
    MidirectivaComponent,
    OtradirectivaDirective
  ],
  imports: [BrowserModule, NgbModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
