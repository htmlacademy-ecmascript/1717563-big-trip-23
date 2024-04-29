import {capitalize, lowerCase} from 'lodash';
import {createElement} from '../render';

function createTripSortTemplate(sorts) {
  return `
    <form class="trip-events__trip-sort trip-sort" action="#" method="get">
      ${sorts.map((sort, index) => `
        <div class="trip-sort__item trip-sort__item--${lowerCase(sort)}">
          <input
            id="sort-${lowerCase(sort)}"
            class="trip-sort__input visually-hidden"
            type="radio"
            name="trip-sort"
            value="sort-${lowerCase(sort)}"
            ${index === 0 ? 'checked' : ''}
            ${index === 1 || index === 4 ? 'disabled' : ''}
          >
          <label
            class="trip-sort__btn"
            for="sort-${lowerCase(sort)}"
          >
            ${capitalize(sort)}
          </label>
        </div>
      `).join('')}
    </form>
  `;
}

export default class TripSortView {
  constructor(sorts) {
    this.sorts = sorts;
  }

  getTemplate() {
    return createTripSortTemplate(this.sorts);
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
