import { Icon, UiModes } from '../types';

export interface IconComponent {
   ref?: HTMLElement;
   id?: string;
   size?: string | number;
   className?: string;
}

export interface GenericHeader {
   title: string;
   subtitle?: string;
}

export interface UserInterface {
   name?: string;
   longitude: number;
   latitude: number;
}

export interface PageHeader {
   mode: string;
   logo: Icon;
   pages: PageHyperlink[];
   icons: Icon[];
}

export interface PageHyperlink {
   active: boolean;
   icon: string;
   name: string;
   url: string;
}

export interface ComponentState {
   isLoading: boolean; // loading state for the component
   systemMode: UiModes; // system mode for the component
   error?: boolean; // error state for the component
}


export interface NavigationUI {
   pageName: string;
   index: number;
}