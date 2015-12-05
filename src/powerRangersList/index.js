import powerRangersList from './directive';
import powerRangersListItem from 'powerRangersListItem';

export default angular
  .module('powerRangers.list', [powerRangersListItem])
  .directive('powerRangersList', powerRangersList)
  .name;
