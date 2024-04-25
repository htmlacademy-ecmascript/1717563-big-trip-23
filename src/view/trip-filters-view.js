import {createElement} from '../render';

function createTripFiltersTemplate() {
  return `
    <form class="trip-filters" action="#" method="get"></form>
  `;
}

export default class TripFiltersView {
  getTemplate() {
    return createTripFiltersTemplate();
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
