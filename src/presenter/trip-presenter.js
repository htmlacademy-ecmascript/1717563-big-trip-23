import {render} from '../render';
import HeaderView from '../view/header-view';
import TripMainView from '../view/trip-main-view';
import MainView from '../view/main-view';
import TripSortView from '../view/trip-sort-view';
import TripEventsView from '../view/trip-events-view';
import EventView from '../view/event-view';
import EventEditView from '../view/event-edit-view';
import {
  TRIP_INFO,
  TRIP_FILTERS,
  TRIP_SORTS,
  TRIP_EVENTS,
} from '../consts';

export default class TripPresenter {
  headerComponent = new HeaderView();
  mainComponent = new MainView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.headerComponent, document.body);
    render(
      new TripMainView({
        tripInfo: TRIP_INFO,
        tripFilters: TRIP_FILTERS,
      }),
      this.headerComponent
        .getElement()
        .querySelector('.page-body__container')
    );
    render(this.mainComponent, document.body);
    render(
      new TripSortView(TRIP_SORTS),
      this.mainComponent
        .getElement()
        .querySelector('.trip-events')
    );
    render(
      new TripEventsView(
        TRIP_EVENTS,
        new EventView().getTemplate(),
        new EventEditView().getTemplate()),
      this.mainComponent
        .getElement()
        .querySelector('.trip-events')
    );
  }
}
