/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SidebarComponent } from '../../components';
import { StaticContentService } from '../../../data/index';

@Component({
   selector: 'rya-navigation',
   standalone: true,
   imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent],
   templateUrl: './navigation.component.html',
   styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
   constructor(private staticContent: StaticContentService) {}
   sideBarContent = this.staticContent.setSidebarContent();
   openModal = false;


   handleToggleModal(eventToggle: boolean, closeModal = false): void {
      if (closeModal) {
         this.openModal = false;
      } else {
         this.openModal = eventToggle;
      }
   }
}