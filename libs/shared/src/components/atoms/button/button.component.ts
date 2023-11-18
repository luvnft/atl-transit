import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonType, Icon, UiModes, Variants, Alignment, ButtonContent } from '../../../models';

interface ButtonProps {
   content: ButtonContent;
   type: ButtonType;
   variant: Variants;
   mode: UiModes;
   align: Alignment;
   icon?: Icon;
}

const defaultProps: ButtonProps = {
   content: {} as ButtonContent,
   type: 'default',
   variant: 'primary',
   mode: 'light',
   align: 'center',
   icon: {} as Icon
};

@Component({
   selector: 'rya-button',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './button.component.html',
   styleUrls: ['./button.component.scss']
})
export class ThemeButtonComponent {
   @Input() props: ButtonProps = { ...defaultProps };
}
