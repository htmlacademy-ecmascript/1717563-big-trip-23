import {render} from '../render';
import TripMainView from '../view/trip-main-view';
import TripInfoView from '../view/trip-info-view';
import TripControlsView from '../view/trip-controls-view';
import TripFiltersView from '../view/trip-filters-view';
import TripFilterView from '../view/trip-filter-view';
import TripFiltersSubmitView from '../view/trip-filters-submit-view';
import NewEventButtonView from '../view/new-event-button-view';

const tripFilters = ['Everything', 'Future', 'Present', 'Post'];

export default class TripMainPresenter {
  tripMainComponent = new TripMainView();
  tripInfoComponent = new TripInfoView();
  tripControlsComponent = new TripControlsView();
  tripFiltersComponent = new TripFiltersView();
  tripFiltersSubmitComponent = new TripFiltersSubmitView();
  newEventButtonComponent = new NewEventButtonView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(this.tripMainComponent, this.container);
    render(this.tripInfoComponent, this.tripMainComponent.getElement());
    render(this.tripControlsComponent, this.tripMainComponent.getElement());

    this.tripControlsFiltersElement = this.tripMainComponent
      .getElement()
      .querySelector('.trip-controls__filters');

    render(this.tripFiltersComponent, this.tripControlsFiltersElement);

    tripFilters.forEach((filter, index) => {
      const isChecked = index === 0;

      render(new TripFilterView(filter, isChecked), this.tripFiltersComponent.getElement());
    });

    render(this.tripFiltersSubmitComponent, this.tripFiltersComponent.getElement());
    render(this.newEventButtonComponent, this.tripMainComponent.getElement());
  }
}
