import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HexagonTileComponent } from './hexagon-tile.component'
import { HexagonLayoutComponent } from './hexagon-layout.component'
import { AnimatedLogoComponent } from './animated-logo.component'
import { MenuBarComponent } from './menu-bar.component'

import { PageService } from './page.service'

@NgModule({
  imports:      [ 
    BrowserModule,
  ],
  declarations: [ 
    AppComponent,
    HexagonTileComponent,
    HexagonLayoutComponent,
    AnimatedLogoComponent,
    MenuBarComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ PageService ]
})
export class AppModule { }
