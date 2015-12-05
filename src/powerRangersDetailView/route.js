import { findById } from 'powerRangers/resolve';
import PowerRangersDetailViewCtrl from './controller';

export default {
  url: '/:id',
  template: `<power-rangers-detail ranger='powerRangersDetailViewCtrl.ranger'></power-rangers-detail>`,
  controller: PowerRangersDetailViewCtrl,
  controllerAs: 'powerRangersDetailViewCtrl',
  resolve: {
    findById
  }
};
