import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [
    NavComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
  ],
  exports: [
    NavComponent,
    MainComponent
  ]
})
export class CoreModule { }
