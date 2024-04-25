import {createElement} from '../render';

function createTripInfoTemplate() {
  return `
    <div class="trip-main__trip-controls trip-controls">
      <div class="trip-controls__filters">
        <h2 class="visually-hidden">Filter events</h2>
      </div>
    </div>
  `;
}

export default class TripInfoView {
  getTemplate() {
    return createTripInfoTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
