import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-hexagon-tile',
  templateUrl: 'hexagon-tile.component.html',
  styleUrls: [ 'hexagon-tile.component.css' ]
})

export class HexagonTileComponent  { 
    name: string;
    color: string;
}