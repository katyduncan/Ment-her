// angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);

angular.module('MyApp', ['satellizer'])
  .config(function($authProvider) {

    $authProvider.linkedin({
      clientId: '75dtrr7fhjol46'
    });

  });)