import app from './directive';
import powerRangers from 'powerRangers';

export default angular
  .module('app.start', [powerRangers])
  .directive('app', app)
  .name;
