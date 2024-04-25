import _ from 'lodash';
import {createElement} from '../render';

function createMessageTemplate(message) {
  return `<p class="trip-events__msg">${message}</p>`;
}

export default class MessageView {
  constructor(message) {
    this.message = _.capitalize(message);
  }

  getTemplate() {
    return createMessageTemplate(this.message);
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
