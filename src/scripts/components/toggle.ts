// Toggle
export const toggle = (): void => {
  document.querySelectorAll('[data-toggle]').forEach((element) => {
    if (element instanceof HTMLElement) {
      element.addEventListener('click', () => {
        const targetSelector = element.getAttribute('data-target');
        if (targetSelector) {
          const targetElement = document.querySelector(targetSelector) as HTMLElement;
          if (targetElement) {
            targetElement.classList.toggle('hidden');
            const isExpanded = targetElement.classList.contains('hidden') ? 'false' : 'true';
            element.setAttribute('aria-expanded', isExpanded);
          }
        }
      });
    }
  });
};

export const toggleIcons = (element: Element, iconPrimary: string, iconSecondary: string) => {
  const firstIcon = element.querySelector(`[data-icon="${iconPrimary}"]`);
  const secondIcon = element.querySelector(`[data-icon="${iconSecondary}"]`);

  if (firstIcon && secondIcon) {
    if (firstIcon.classList.contains('hidden')) {
      firstIcon.classList.remove('hidden');
      secondIcon.classList.add('hidden');
    } else {
      firstIcon.classList.add('hidden');
      secondIcon.classList.remove('hidden');
    }
  }
};
