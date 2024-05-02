import {createElement} from '../render';

function createInfoTemplate() {
  return `
    <section class="trip-main__trip-info trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    </section>
  `;
}

function createControlsTemplate(filters) {
  return `
    <div class="trip-main__trip-controls trip-controls">
      <div class="trip-controls__filters">
        <h2 class="visually-hidden">Filter events</h2>
        <form class="trip-filters" action="#" method="get">
          ${filters.map((filter) => `
            <div class="trip-filters__filter">
              <input
                id="filter-${filter}"
                class="trip-filters__filter-input visually-hidden"
                type="radio"
                name="trip-filter"
                value=${filter}
                ${filter === 'everything' ? 'checked' : ''}
              >
              <label
                class="trip-filters__filter-label"
                for="filter-${filter}"
              >
                ${filter}
              </label>
            </div>
          `).join('')}

          <button class="visually-hidden" type="submit">Accept filter</button>
        </form>
      </div>
    </div>
  `;
}

function createTripMainTemplate(filters) {
  return `
    <div class="trip-main">
      ${createInfoTemplate()}
      ${createControlsTemplate(filters)}

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
  constructor({filters}) {
    this.filters = filters;
  }

  getTemplate() {
    return createTripMainTemplate(this.filters);
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
