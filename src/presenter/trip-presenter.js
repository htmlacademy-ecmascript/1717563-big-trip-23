import {render} from '../render';
import HeaderView from '../view/header-view';
import TripMainView from '../view/trip-main-view';
import MainView from '../view/main-view';
import TripSortView from '../view/trip-sort-view';
import EventsView from '../view/events-view';
import EventView from '../view/event-view';
import EventEditView from '../view/event-edit-view';
import {FILTERS, SORT_TYPES, EVENT_TYPES} from '../consts';
import {mockDestinations} from '../mock/destinations';

export default class TripPresenter {
  headerComponent = new HeaderView();
  mainComponent = new MainView();
  tripEventsElement = this.mainComponent.getElement().querySelector('.trip-events');
  eventsComponent = new EventsView();

  constructor({container, eventsModel}) {
    this.container = container;
    this.eventsModel = eventsModel;
  }

  init() {
    this.tripEvents = [...this.eventsModel.getEvents()];

    render(this.headerComponent, this.container);
    render(
      new TripMainView({filters: FILTERS}),
      this.headerComponent.getElement().querySelector('.page-body__container')
    );
    render(this.mainComponent, this.container);
    render(new TripSortView(SORT_TYPES), this.tripEventsElement);
    render(this.eventsComponent, this.tripEventsElement);

    render(
      new EventEditView({
        types: EVENT_TYPES,
        destinations: mockDestinations,
      }),
      this.eventsComponent.getElement()
    );

    this.tripEvents.map((event) => {
      render(new EventView({event}), this.eventsComponent.getElement());
    });
  }
}
