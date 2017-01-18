import { Component } from '@angular/core';
import { PageService } from './page.service'
import { Page } from './page'

@Component({
  moduleId: module.id,
  selector: 'my-hexagon-layout',
  templateUrl: 'hexagon-layout.component.html',
  styleUrls: [ 'hexagon-layout.component.css' ]
})

export class HexagonLayoutComponent  {
  
    name: string;
    color: string;
    pages: Page[];
    constructor(private pageService: PageService) {
      // this.pages = pageService.getPages()
    }

    ngOnInit(): void {
    this.pageService.getPages()
      .then(pages => this.pages = pages);
  }
}