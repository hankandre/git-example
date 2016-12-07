import angular from 'angular';
import HeaderModule from './header/header';

const StaticElementsModule = angular.module('static', [
    HeaderModule.name
]);

export default StaticElementsModule;