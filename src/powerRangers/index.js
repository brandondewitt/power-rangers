import PowerRangerActions from './actions';
import PowerRangersResource from './resource';
import config from './config';

import powerRangersListView from 'powerRangersListView';
import powerRangersDetailView from 'powerRangersDetailView';

export default angular
  .module('powerRangers', [powerRangersListView, powerRangersDetailView])
  .factory('PowerRangerActions', PowerRangerActions)
  .service('PowerRangersResource', PowerRangersResource)
  .config(config)
  .name;
