import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'navigation-placeholder-icon',
   standalone: true,
   imports: [CommonModule],
   template: `
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="20"
         height="20"
         viewBox="0 0 20 20"
         [attr.fill]="fillOutline"
      >
         <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18.5 10C18.5 14.6944 14.6944 18.5 10 18.5C5.30558 18.5 1.5 14.6944 1.5 10C1.5 5.30558 5.30558 1.5 10 1.5C14.6944 1.5 18.5 5.30558 18.5 10Z"
            [attr.fill]="fill"
         />
      </svg>
   `
})
export class PlaceholderIconComponent {
   @Input() fill = '#484848';
   @Input() fillOutline = 'none';
}
