import _ from 'lodash';
import {createElement} from '../render';

function createTripSortItemTemplate(value, checked, disabled) {
  return `
    <div class="trip-sort__item trip-sort__item--${_.lowerCase(value)}">
      <input
        id="sort-${_.lowerCase(value)}"
        class="trip-sort__input visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${_.lowerCase(value)}"
        ${checked ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
      >
      <label
        class="trip-sort__btn"
        for="sort-${_.lowerCase(value)}"
      >
        ${_.capitalize(value)}
      </label>
    </div>
  `;
}

export default class TripSortItemView {
  constructor(value, checked = false, disabled = false) {
    this.value = value;
    this.checked = checked;
    this.disabled = disabled;
  }

  getTemplate() {
    return createTripSortItemTemplate(this.value, this.checked, this.disabled);
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
