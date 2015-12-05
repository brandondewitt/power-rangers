import { find } from 'powerRangers/resolve';
import PowerRangersListViewCtrl from './controller';
export default {
  url: '',
  template: `<power-rangers-list rangers='powerRangersListViewCtrl.rangers'></power-rangers-list>`,
  controller: PowerRangersListViewCtrl,
  controllerAs: 'powerRangersListViewCtrl',
  resolve: {
    find
  }
};
