export const mockEvents = [
  {
    id: 'event-0',
    basePrice: 1200,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'Chamonix',
    isFavorite: true,
    offers: [
      {
        id: 'train-offer-0',
        title: 'Add luggage',
        price: 50,
      },
      {
        id: 'train-offer-1',
        title: 'Switch to comfort',
        price: 80,
      },
      {
        id: 'train-offer-2',
        title: 'Add meal',
        price: 15,
      },
      {
        id: 'train-offer-3',
        title: 'Choose seats',
        price: 5,
      },
      {
        id: 'train-offer-4',
        title: 'Travel by train',
        price: 40,
      },
    ],
    type: 'train',
  },
  {
    id: 'event-1',
    basePrice: 1500,
    dateFrom: '2019-08-10T22:55:56.845Z',
    dateTo: '2019-08-11T11:22:13.375Z',
    destination: 'Amsterdam',
    isFavorite: false,
    offers: [
      {
        id: 'bus-offer-0',
        title: 'Add luggage',
        price: 50,
      },
      {
        id: 'bus-offer-1',
        title: 'Switch to comfort',
        price: 80,
      }
    ],
    type: 'bus',
  },
  {
    id: 'event-2',
    basePrice: 1100,
    dateFrom: '2019-09-10T22:55:56.845Z',
    dateTo: '2019-09-11T11:22:13.375Z',
    destination: 'Geneva',
    isFavorite: false,
    type: 'flight',
  },
];

