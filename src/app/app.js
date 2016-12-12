'use strict';
import 'normalize.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import appComponent from './app.component';
import StaticElementsModule from './static-elements/static-elements';


angular.module('app', [
    uirouter,
    StaticElementsModule.name
])
.component('app', appComponent);
