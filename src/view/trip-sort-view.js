import {createElement} from '../render';

function createTripSortTemplate(sorts) {
  return `
    <form class="trip-events__trip-sort trip-sort" action="#" method="get">
      ${sorts.map((sort) => `
        <div class="trip-sort__item trip-sort__item--${sort}">
          <input
            id="sort-${sort}"
            class="trip-sort__input visually-hidden"
            type="radio"
            name="trip-sort"
            value="sort-${sort}"
            ${sort === 'days' ? 'checked' : ''}
            ${sort === 'event' || sort === 'offers' ? 'disabled' : ''}
          >
          <label
            class="trip-sort__btn"
            for="sort-${sort}"
          >
            ${sort}
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
