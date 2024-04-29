import {createElement} from '../render';

function createTripEventsTemplate(events, eventTemplate, eventEditTemplate) {
  return `
    <ul class="trip-events__list">
      ${events.map((event, index) => `
        <li class="trip-events__item">
          ${index === 0 ? eventEditTemplate : eventTemplate}
        </li>
      `).join('')}
    </ul>
  `;
}

export default class TripEventsView {
  constructor(events, eventTemplate, eventEditTemplate) {
    this.events = events;
    this.eventTemplate = eventTemplate;
    this.eventEditTemplate = eventEditTemplate;
  }

  getTemplate() {
    return createTripEventsTemplate(this.events, this.eventTemplate, this.eventEditTemplate);
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
