import rootReducer from 'main/reducer';
import thunk from 'redux-thunk';
const $inject = ['$locationProvider', '$urlRouterProvider', '$ngReduxProvider'];
export default function config($locationProvider, $urlRouterProvider, $ngReduxProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
}
config.$inject = $inject;
