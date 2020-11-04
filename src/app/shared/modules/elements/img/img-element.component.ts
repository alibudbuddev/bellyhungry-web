import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-element',
  template: `<img [attr.src]="src" [attr.alt]="alt" [attr.title]="title" />`
})
export class ImgElementComponent {
	@Input() src: string;
	@Input() alt: string = 'bellyhungry image';
	@Input() title: string = 'bellyhungry image';
}
