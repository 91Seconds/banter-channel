import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HexagonTileComponent } from './hexagon-tile.component'
import { HexagonLayoutComponent } from './hexagon-layout.component'
import { PageService } from './page.service'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    HexagonTileComponent,
    HexagonLayoutComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ PageService ]
})
export class AppModule { }
