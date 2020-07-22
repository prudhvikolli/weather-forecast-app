export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const cities = [
  { city_name: 'Toronto' },
  {
    city_name: 'Abbotsford',
  },
  {
    city_id: 5882799,
    city_name: 'Airdrie',
  },
  {
    city_id: 5882873,
    city_name: 'Ajax',
  },
  {
    city_id: 5884083,
    city_name: 'Alma',
  },
  {
    city_id: 5884588,
    city_name: 'Amos',
  },
  {
    city_id: 5885383,
    city_name: 'Anmore',
  },
  {
    city_id: 5889745,
    city_name: 'Baie-Comeau',
  },
  {
    city_id: 5894171,
    city_name: 'Barrie',
  },
].map((item) => ({ value: item.city_name, label: item.city_name }));
