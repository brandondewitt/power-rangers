import { route as powerRangersDetailViewRoute } from 'powerRangersDetailView';
import { route as powerRangersListViewRoute } from 'powerRangersListView';
export default [
  {
    name: 'powerRangers',
    state: {
      url: '/powerRangers',
      abstract: true,
      template: '<ui-view>'
    }
  },
  {
    name: 'powerRangers.list',
    state: powerRangersListViewRoute
  },
  {
    name: 'powerRangers.detail',
    state: powerRangersDetailViewRoute
  }
];
