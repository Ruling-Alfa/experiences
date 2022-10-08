import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.loadStyle('about-component');
  }

  private loadStyle(styleName: string) {
    let aboutPageTheme = this.document.getElementById(
      'about-page-theme'
    ) as HTMLLinkElement;
    if (aboutPageTheme) {
      aboutPageTheme.href = `${styleName}.css`;
    }
  }

}
