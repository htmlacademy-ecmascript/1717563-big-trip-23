import TripPresenter from './presenter/trip-presenter';

const tripPresenter = new TripPresenter({
  container: document.body,
});

tripPresenter.init();
