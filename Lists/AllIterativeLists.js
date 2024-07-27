const homeOptions = [
  {
    img: require('../assets/HomeAssets/1.png'),
    label: 'Economy Ride',
  },
  {
    img: require('../assets/HomeAssets/2.png'),
    label: 'Comfort Ride',
  },
  {
    img: require('../assets/HomeAssets/3.png'),
    label: 'Luxury Ride',
  },
  {
    img: require('../assets/HomeAssets/4.png'),
    label: 'Delivery',
  },
  {
    img: require('../assets/HomeAssets/5.png'),
    label: 'Food',
  },
  {
    img: require('../assets/HomeAssets/6.png'),
    label: 'Super Mart',
  },
];

const tripOptions = [
  {
    img: require('../assets/TripAssets/1.png'),
    capacity: 4,
    label: 'Economy',
    subLabel: 'Best, Economy rides',
    time: '2 mins away',
    price: '$193.20',
  },
  {
    img: require('../assets/TripAssets/2.png'),
    label: 'Comfort',
    capacity: 4,
    subLabel: 'Affordable, Compact rides',
    time: '6 mins away',
    price: '$293.20',
  },
  {
    img: require('../assets/TripAssets/3.png'),
    capacity: 4,
    label: 'Luxury Ride',
    subLabel: 'Affordable, luxury rides',
    time: '2 mins away',
    price: '$393.20',
  },
  {
    img: require('../assets/TripAssets/4.png'),
    capacity: null,
    label: 'Delivery',
    subLabel: 'Affordable, Delivery',
    time: '30 mins away',
    price: '$89.20',
  },
];

const popularSearchList = [
  {
    label: 'Third Wave Coffee',
    subLabel:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    label: 'Third Wave Coffee',
    subLabel:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    label: 'Third Wave Coffee',
    subLabel:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    label: 'Third Wave Coffee',
    subLabel:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
];

export default {homeOptions, tripOptions, popularSearchList};
