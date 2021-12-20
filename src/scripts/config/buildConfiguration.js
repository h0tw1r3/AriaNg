(function () {
    'use strict';

    angular.module('ariaNg').constant('ariaNgBuildConfiguration', {
        buildVersion: 'BOTS-FLAVOR: ${ARIANG_VERSION}',
        buildCommit: '${ARIANG_BUILD_COMMIT}'
    });
}());
