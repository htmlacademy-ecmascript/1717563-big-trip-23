import _ from 'lodash';
import {createElement} from '../render';

function createTripFilterTemplate(value, checked) {
  return `
    <div class="trip-filters__filter">
      <input
        id="${_.lowerCase(value)}"
        class="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value='${_.lowerCase(value)}'
        ${checked ? 'checked' : ''}
      >
      <label
        class="trip-filters__filter-label"
        for="${_.lowerCase(value)}"
      >
        ${_.capitalize(value)}
      </label>
    </div>
  `;
}

export default class TripFilterView {
  constructor(value, checked = false) {
    this.value = value;
    this.checked = checked;
  }

  getTemplate() {
    return createTripFilterTemplate(this.value, this.checked);
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
