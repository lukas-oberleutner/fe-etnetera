type CarouselConfig = {
  slidesContainerId: string;
  prevButtonId: string;
  nextButtonId: string;
};

let currentIndex = 0;

export const initCarousel = (config: CarouselConfig): void => {
  const slidesContainer = document.querySelector(config.slidesContainerId);
  const prevButton = document.querySelector(config.prevButtonId);
  const nextButton = document.querySelector(config.nextButtonId);

  if (!(slidesContainer instanceof HTMLElement)) {
    console.error("Carousel slides container neexistuje.");
    return;
  }
  if (!(prevButton instanceof HTMLButtonElement)) {
    console.error("Prev button neexistuje nebo není typu button.");
    return;
  }
  if (!(nextButton instanceof HTMLButtonElement)) {
    console.error("Next button neexistuje nebo není typu button.");
    return;
  }

  const totalSlides = slidesContainer.children.length;

  const updateSlidePosition = (): void => {
    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
    updateButtonsState();
  };

  const updateButtonsState = (): void => {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === totalSlides - 1;
  };

  const prevSlide = (): void => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateSlidePosition();
    }
  };

  const nextSlide = (): void => {
    if (currentIndex < totalSlides - 1) {
      currentIndex += 1;
      updateSlidePosition();
    }
  };

  updateButtonsState();
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
};
