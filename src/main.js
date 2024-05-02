import EventsModel from './model/events-model';
import TripPresenter from './presenter/trip-presenter';

const eventsModel = new EventsModel();
const tripPresenter = new TripPresenter({
  container: document.body,
  eventsModel,
});

tripPresenter.init();

