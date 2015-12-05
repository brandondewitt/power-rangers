import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';

import 'angular-material/angular-material.css';
import 'angular-material/angular-material.layouts.css';

import main from 'main';
import config from './config';

angular
  .module('app', [
    uiRouter,
    ngRedux,
    ngMaterial,
    ngAnimate,
    ngAria,
    main
  ])
  .config(config);
