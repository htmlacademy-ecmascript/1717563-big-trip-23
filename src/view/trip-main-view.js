import {capitalize, lowerCase} from 'lodash';
import {createElement} from '../render';

function createTripInfoTemplate({title, dates, cost}) {
  return `
    <section class="trip-main__trip-info trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${title}</h1>
        <p class="trip-info__dates">${dates}</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${cost}</span>
      </p>
    </section>
  `;
}

function createTripControlsTemplate(filters) {
  return `
    <div class="trip-main__trip-controls trip-controls">
      <div class="trip-controls__filters">
        <h2 class="visually-hidden">Filter events</h2>
        <form class="trip-filters" action="#" method="get">
          ${filters.map((filter, index) => `
            <div class="trip-filters__filter">
              <input
                id="filter-everything"
                class="trip-filters__filter-input visually-hidden"
                type="radio"
                name="trip-filter"
                value=${lowerCase(filter)}
                ${index === 0 ? 'checked' : ''}
              >
              <label
                class="trip-filters__filter-label"
                for="filter-everything"
              >
                ${capitalize(filter)}
              </label>
            </div>
          `).join('')}

          <button class="visually-hidden" type="submit">Accept filter</button>
        </form>
      </div>
    </div>
  `;
}

function createTripMainTemplate(tripInfo, tripFilters) {
  return `
    <div class="trip-main">
      ${createTripInfoTemplate(tripInfo)}
      ${createTripControlsTemplate(tripFilters)}

      <button
        class="trip-main__event-add-btn btn btn--big btn--yellow"
        type="button"
      >
        New event
      </button>
    </div>
  `;
}

export default class TripMainView {
  constructor({tripInfo, tripFilters}) {
    this.tripInfo = tripInfo;
    this.tripFilters = tripFilters;
  }

  getTemplate() {
    return createTripMainTemplate(this.tripInfo, this.tripFilters);
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
