import {render} from './render';
import HeaderView from './view/header-view';
import LogoView from './view/logo-view';
import MainView from './view/main-view';

import TripMainPresenter from './presenter/trip-main-presenter';
import TripEventsPresenter from './presenter/trip-events-presenter';

const bodyElement = document.body;

render(new HeaderView(), bodyElement);
render(new MainView(), bodyElement);

const headerElement = bodyElement.querySelector('.page-header');
const headerContainerElement = headerElement.querySelector('.page-body__container');
const mainElement = bodyElement.querySelector('.page-main');
const mainContainerElement = mainElement.querySelector('.page-body__container');

const tripMainPresenter = new TripMainPresenter(
  {container: headerContainerElement}
);

const tripEventsPresenter = new TripEventsPresenter(
  {container: mainContainerElement}
);

render(new LogoView(), headerContainerElement);
tripMainPresenter.init();
tripEventsPresenter.init();

