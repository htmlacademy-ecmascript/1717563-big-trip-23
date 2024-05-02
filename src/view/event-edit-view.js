import {humanizeDate} from '../utils';
import {createElement} from '../render';

const DEFAULT_EVENT = {
  basePrice: 1100,
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo: '2019-07-11T11:22:13.375Z',
  destination: {
    id: 'chamonix',
    name: 'Chamonix',
    description: 'Chamonix description',
    pictures: [
      {
        src: './img/photos/1.jpg',
        description: 'Description',
      },
      {
        src: './img/photos/2.jpg',
        description: 'Description',
      },
      {
        src: './img/photos/3.jpg',
        description: 'Description',
      },
      {
        src: './img/photos/4.jpg',
        description: 'Description',
      },
      {
        src: './img/photos/5.jpg',
        description: 'Description',
      },
    ],
  },
  isFavorite: true,
  offers: [
    {
      id: 'taxi-offer-0dsa',
      title: 'Add luggage',
      price: 50,
    },
    {
      id: 'taxi-offer-11231',
      title: 'Switch to comfort',
      price: 80,
    },
    {
      id: 'taxi-offer-2312mds1',
      title: 'Add meal',
      price: 15,
    },
    {
      id: 'taxi-offer-3ds01k3',
      title: 'Choose seats',
      price: 5,
    },
    {
      id: 'taxi-offer-4dasm123',
      title: 'Travel by train',
      price: 40,
    },
  ],
  type: 'taxi',
};

function createHeaderTemplate(event, types, destinations, edit) {
  const {basePrice, dateFrom, dateTo, destination, type} = event;

  return `
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            ${types.map((element) => `
              <div class="event__type-item">
                <input
                  id="event-type-${element}-1"
                  class="event__type-input visually-hidden"
                  type="radio"
                  name="event-type"
                  value="${element}"
                  ${element === type ? 'checked' : ''}
                >
                <label
                  class="event__type-label event__type-label--${element}"
                  for="event-type-${element}-1"
                >
                  ${element}
                </label>
              </div>
            `).join('')}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group event__field-group--destination">
        <label class="event__label event__type-output" for="event-destination-1">
          ${type}
        </label>
        <input
          class="event__input event__input--destination"
          id="event-destination-1"
          type="text"
          name="event-destination"
          value="${destination.name}"
          list="destination-list-1"
        >
        <datalist id="destination-list-1">
          ${destinations.map((element) => `
            <option value="${element.name}"></option>
          `).join('')}
        </datalist>
      </div>

      <div class="event__field-group event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input
          class="event__input event__input--time"
          id="event-start-time-1"
          type="text"
          name="event-start-time"
          value="${humanizeDate(dateFrom, 'DD/MM/YY HH:MM')}"
        >
          &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input
          class="event__input event__input--time"
          id="event-end-time-1"
          type="text"
          name="event-end-time"
          value="${humanizeDate(dateTo, 'DD/MM/YY HH:MM')}"
        >
      </div>

      <div class="event__field-group event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input
          class="event__input event__input--price"
          id="event-price-1"
          type="text"
          name="event-price"
          value="${basePrice}"
        >
      </div>

      <button class="event__save-btn btn btn--blue" type="submit">Save</button>
      ${edit === true ? `
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button> ` : `
        <button class="event__reset-btn" type="reset">Cancel</button>
      `}
    </header>
  `;
}

function createDetailsTemplate({destination, offers}) {
  return `
    <section class="event__details">
      ${offers.length > 0 ? `
        <section class="event__section event__section--offers">
          <h3 class="event__section-title event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${offers.map((offer) => `
              <div class="event__offer-selector">
                <input
                  class="event__offer-checkbox visually-hidden"
                  id="${offer.id}"
                  type="checkbox"
                  name="event-offer-${offer.title}"
                >
                <label class="event__offer-label" for="${offer.id}>
                  <span class="event__offer-title">${offer.title}</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">${offer.price}</span>
                </label>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      ${destination.description !== '' || destination.pictures.length > 0 ? `
        <section class="event__section event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          ${destination.destinations !== '' ? `
            <p class="event__destination-description">${destination.description}</p>
          ` : ''}
          ${destination.pictures.length > 0 ? `
            <div class="event__photos-container">
              <div class="event__photos-tape">
                ${destination.pictures.map((picture) => `
                  <img class="event__photo" src="${picture.src}" alt="${picture.description}">
                `)}}
              </div>
            </div>
          ` : ''}
        </section>
      ` : ''}
    </section>
  `;
}

function createEventEditTemplate(event, types, destinations, edit) {
  return `
    <form class="event event--edit" action="#" method="post">
      ${createHeaderTemplate(event, types, destinations, edit)}
      ${createDetailsTemplate(event)}
    </form>
  `;
}

export default class EventEditView {
  constructor({event = DEFAULT_EVENT, types, destinations, edit = false} = '') {
    this.event = event;
    this.types = types;
    this.destinations = destinations;
    this.edit = edit;
  }

  getTemplate() {
    return createEventEditTemplate(this.event, this.types, this.destinations, this.edit);
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
