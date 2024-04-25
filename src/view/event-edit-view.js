import {createElement} from '../render';

function createEventEditTemplate() {
  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post"></form>
    </li>
  `;
}

export default class EventEditView {
  getTemplate() {
    return createEventEditTemplate();
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
