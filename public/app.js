import uiModules from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import './less/main.less';
import template from './templates/index.html';

import 'leaflet/dist/leaflet.css';
import 'leaflet';
import 'angular-simple-logger/dist/index.light';
import 'ui-leaflet';

uiRoutes.enable();
uiRoutes
    .when('/', {
        template
    });

uiModules
    .get('app/kibana_leaflet_sample', ['ui-leaflet'])
    .controller('kibanaLeafletSampleHelloWorld', function ($scope) {
        $scope.title = 'Kibana Leaflet Sample';
        $scope.description = 'Sample kibana leaflet plugin';

        $scope.defaults = {
            tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
            maxZoom: 14,
            path: {
                weight: 10,
                color: '#800000',
                opacity: 1
            }
        };
    });
