import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/tab.interface';
import {ButtonComponent} from './../button/button.component'
import { Button } from '../../models/button.interface';

@Component({
   selector: 'lib-tab',
   standalone: true,
   imports: [CommonModule, ButtonComponent],
   templateUrl: './tab.component.html',
   styleUrls: ['./tab.component.scss']
})
export class TabComponent {
   @Input() tabs: Tab[] = [
      {
        button: {
          text: 'Nearest Stations',
          mode: 'light',
          icon: '/assets/warning.png'
        },
        active: true
      },
      {
        button: {
          text: 'Saved Stations',
          mode: 'dark'
        },
        active: false
      }
    ];


    toggleActiveState() : void {
      this.tabs.forEach(tab => {
         tab.active = !tab.active
      });
    }
}