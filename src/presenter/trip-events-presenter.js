import {render, RenderPosition} from '../render';
import TripEventsView from '../view/trip-events-view';
import TripSortView from '../view/trip-sort-view';
import TripSortItemView from '../view/trip-sort-item-view';
import TripEventsListView from '../view/trip-events-list-view';
import EventView from '../view/event-view';
import EventFavoriteView from '../view/event-favorite-view';
import EventRollupView from '../view/event-rollup-view';
import EventEditView from '../view/event-edit-view';
import EventHeaderView from '../view/event-header-view';
import EventDetailsView from '../view/event-details-view';
import EventDetailsOffersView from '../view/event-details-offers-view';
import EventDetailsDestinationView from '../view/event-details-destination-view';
import EventSaveView from '../view/event-save-view';
import EventResetView from '../view/event-reset-view';

const tripSortTypes = ['Days', 'Event', 'Time', 'Price', 'Offers'];
const tripEvents = ['', '', ''];

export default class TripEventsPresenter {
  tripEventsComponent = new TripEventsView();
  tripSortComponent = new TripSortView();
  tripEventsListComponent = new TripEventsListView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.tripEventsComponent, this.container);
    render(this.tripSortComponent, this.tripEventsComponent.getElement());

    tripSortTypes.forEach((sort, index) => {
      const isChecked = index === 0;
      const isDisabled = index === 1 || index === 4;

      render(new TripSortItemView(sort, isChecked, isDisabled), this.tripSortComponent.getElement());
    });

    render(this.tripEventsListComponent, this.tripEventsComponent.getElement());

    tripEvents.forEach((value, index) => {
      if (index !== 2) {
        render(new EventView(), this.tripEventsListComponent.getElement());

        this.tripElement = this.tripEventsListComponent
          .getElement()
          .querySelectorAll('.event')[index];

        render(new EventFavoriteView(), this.tripElement);
        render(new EventRollupView(), this.tripElement);
      } else {
        render(new EventEditView(), this.tripEventsListComponent.getElement());

        this.tripElement = this.tripEventsListComponent
          .getElement()
          .querySelectorAll('.event')[index];

        render(new EventHeaderView(), this.tripElement);

        this.eventEditHeaderElement = this.tripElement
          .querySelector('.event__header');

        render(new EventSaveView(), this.eventEditHeaderElement);
        render(new EventResetView('Cancel'), this.eventEditHeaderElement);
        render(new EventRollupView(), this.eventEditHeaderElement);

        render(new EventDetailsView(), this.tripElement);

        this.eventEditDetailsElement = this.tripElement
          .querySelector('.event__details');

        render(new EventDetailsOffersView(), this.eventEditDetailsElement);
        render(new EventDetailsDestinationView(), this.eventEditDetailsElement);
      }
    });

    render(new EventEditView(), this.tripEventsListComponent.getElement(), RenderPosition.AFTERBEGIN);

    this.eventNewElement = this.tripEventsListComponent
      .getElement()
      .querySelectorAll('.event--edit')[0];

    render(new EventHeaderView(), this.eventNewElement);

    this.eventNewHeaderElement = this.eventNewElement
      .querySelector('.event__header');

    render(new EventSaveView(), this.eventNewHeaderElement);
    render(new EventResetView('Delete'), this.eventNewHeaderElement);
    render(new EventDetailsView(), this.eventNewElement);

    this.eventNewDetailsElement = this.eventNewElement
      .querySelector('.event__details');

    render(new EventDetailsOffersView(), this.eventNewDetailsElement);
    render(new EventDetailsDestinationView(), this.eventNewDetailsElement);
  }
}
