// Icon
import {
  iconCheck,
  iconEnvelope,
  iconChevronLeft,
  iconChevronRight,
  iconClose,
  iconMenu,
  iconClock
} from '../../theme/icons.ts';

const icons = {
  'check': iconCheck,
  'envelope': iconEnvelope,
  'chevron-left': iconChevronLeft,
  'chevron-right': iconChevronRight,
  'close': iconClose,
  'menu': iconMenu,
  'clock': iconClock,
};

export const loadIcons = () => {
  const iconElements = document.querySelectorAll('.c-icon');

  iconElements.forEach(iconElement => {
    const iconName = iconElement.getAttribute('data-icon');
    if (iconName && icons[iconName as keyof typeof icons]) {
      iconElement.innerHTML = icons[iconName as keyof typeof icons];
    } else {
      console.error(`Ikona "${iconName}" nenalezena.`);
    }
  });
}
