import { Component, EventEmitter, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/tab.interface';
import { ButtonComponent } from './../button/button.component';
import { Button } from '../../models/button.interface';
import {ViewService} from 'libs/stations/data/src/services/'
@Component({
   selector: 'lib-tab',
   standalone: true,
   imports: [CommonModule, ButtonComponent],
   templateUrl: './tab.component.html',
   styleUrls: ['./tab.component.scss']
})
export class TabComponent {
   @Input() content!: Tab[];

   toggleTabActiveState(tab: Tab): void {
      if (!tab.active) {
         this.content.forEach((button) => {
            button.active = button === tab;
         });
      }
   }
}
