'use strict';
import 'normalize.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import appComponent from './app.component';
import '../content/styles/styles.scss';

(function() {
    angular.module('app', [
        uirouter
    ])
    .component('app', appComponent);
})();