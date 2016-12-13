'use strict';
import 'normalize.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import appComponent from './app.component';
import StaticElementsModule from './static-elements/static-elements';
import AppContentModule from './app-content/app-content';


angular.module('app', [
    uirouter,
    StaticElementsModule.name,
    AppContentModule.name
])
.component('app', appComponent);
