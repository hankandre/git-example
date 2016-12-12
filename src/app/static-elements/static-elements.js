import angular from 'angular';
import HeaderModule from './header/header';
import FooterModule from './footer/footer'

const StaticElementsModule = angular.module('static', [
    HeaderModule.name,
    FooterModule.name
]);

export default StaticElementsModule;